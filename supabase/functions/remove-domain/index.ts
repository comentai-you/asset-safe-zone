import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Não autorizado' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      console.error('Auth error:', userError);
      return new Response(
        JSON.stringify({ error: 'Usuário não autenticado' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get user's current domain
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('custom_domain')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      console.error('Profile error:', profileError);
      return new Response(
        JSON.stringify({ error: 'Perfil não encontrado' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const domain = profile.custom_domain;

    if (!domain) {
      return new Response(
        JSON.stringify({ error: 'Nenhum domínio configurado' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get Vercel credentials
    const vercelToken = Deno.env.get('VERCEL_API_TOKEN');
    const projectId = Deno.env.get('VERCEL_PROJECT_ID');
    const teamId = Deno.env.get('VERCEL_TEAM_ID');

    if (!vercelToken || !projectId) {
      console.error('Missing Vercel credentials');
      return new Response(
        JSON.stringify({ error: 'Configuração do servidor incompleta' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Removing domain ${domain} from Vercel project ${projectId}`);

    // Build Vercel API URL for DELETE
    let vercelUrl = `https://api.vercel.com/v9/projects/${projectId}/domains/${encodeURIComponent(domain)}`;
    if (teamId) {
      vercelUrl += `?teamId=${encodeURIComponent(teamId)}`;
    }

    // Call Vercel API to remove domain
    const vercelResponse = await fetch(vercelUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Vercel returns 204 on success, or 200 with body
    if (!vercelResponse.ok && vercelResponse.status !== 204) {
      const vercelData = await vercelResponse.json().catch(() => ({}));
      console.error('Vercel remove error:', vercelData);
      
      // Even if Vercel fails (e.g., domain not found), we still clear the profile
      // so the user can add a new domain
      console.log('Proceeding to clear profile despite Vercel error');
    }

    // Clear domain from user's profile using service role
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const { error: updateError } = await supabaseAdmin
      .from('profiles')
      .update({ 
        custom_domain: null,
        domain_verified: false 
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Error clearing domain from profile:', updateError);
      return new Response(
        JSON.stringify({ error: 'Erro ao limpar domínio do perfil' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Domain ${domain} removed successfully for user ${user.id}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Domínio removido com sucesso!'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in remove-domain function:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
