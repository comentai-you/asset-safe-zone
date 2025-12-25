import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o TrustPage, você concorda em cumprir e estar vinculado aos 
              seguintes termos e condições de uso. Se você não concordar com qualquer parte destes 
              termos, não deve usar nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
            <p>
              O TrustPage é uma plataforma que permite aos usuários criar landing pages otimizadas 
              para conversão. O serviço inclui ferramentas de edição, hospedagem e análise de métricas.
            </p>
          </section>

          {/* SEÇÃO CRÍTICA - REGRA DE ADS */}
          <section className="bg-destructive/10 border-2 border-destructive rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-destructive">
                3. PROIBIÇÃO DE TRÁFEGO PAGO - REGRA CRÍTICA
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="font-semibold text-foreground">
                Esta é a regra mais importante do TrustPage e sua violação resulta em penalidades imediatas:
              </p>
              
              <div className="bg-background rounded-lg p-4 border border-destructive/30">
                <h3 className="font-bold text-foreground mb-2">🚫 É ESTRITAMENTE PROIBIDO:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Utilizar links do TrustPage (trustpage.com/seu-link) em anúncios pagos 
                    <strong> (Facebook Ads, Google Ads, TikTok Ads, etc.)</strong> no Plano Essencial ou Trial.
                  </li>
                  <li>
                    Direcionar tráfego pago de qualquer plataforma de publicidade para páginas 
                    hospedadas no domínio compartilhado.
                  </li>
                  <li>
                    Usar redirecionadores ou encurtadores para mascarar o destino final do anúncio.
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 border border-amber-500/30">
                <h3 className="font-bold text-foreground mb-2">⚠️ SISTEMA DE DETECÇÃO:</h3>
                <p>
                  O TrustPage possui um <strong>sistema automático de detecção</strong> que identifica 
                  tráfego proveniente de plataformas de anúncios através de parâmetros como:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><code className="bg-muted px-2 py-0.5 rounded">fbclid</code> - Facebook/Meta Ads</li>
                  <li><code className="bg-muted px-2 py-0.5 rounded">gclid</code> - Google Ads</li>
                  <li><code className="bg-muted px-2 py-0.5 rounded">utm_source=ads</code> - Campanhas pagas</li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-4 border border-destructive">
                <h3 className="font-bold text-destructive mb-2">❌ PENALIDADES:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Exibição de aviso de violação visível para todos os visitantes</li>
                  <li>Suspensão imediata da página</li>
                  <li>Banimento permanente da conta em caso de reincidência</li>
                  <li><strong>Sem direito a reembolso</strong></li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 border border-primary">
                <h3 className="font-bold text-primary mb-2">✅ COMO USAR ADS LEGALMENTE:</h3>
                <p>
                  Para utilizar suas páginas em campanhas de tráfego pago, você DEVE:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Fazer upgrade para o <strong>Plano Pro ou Elite</strong></li>
                  <li>Configurar um <strong>domínio próprio</strong> (ex: suapagina.com.br)</li>
                  <li>Usar o domínio próprio como destino dos anúncios</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conta do Usuário</h2>
            <p>
              Para utilizar o TrustPage, você deve criar uma conta fornecendo informações precisas 
              e completas. Você é responsável por manter a confidencialidade de sua senha e por 
              todas as atividades que ocorram em sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Uso Aceitável</h2>
            <p>Você concorda em não usar o TrustPage para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Publicar conteúdo ilegal, difamatório ou ofensivo</li>
              <li>Violar direitos de propriedade intelectual de terceiros</li>
              <li>Distribuir malware ou conteúdo malicioso</li>
              <li>Realizar atividades fraudulentas ou enganosas</li>
              <li>Violar a regra de tráfego pago descrita na Seção 3</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo criado por você no TrustPage permanece de sua propriedade. 
              No entanto, você nos concede uma licença limitada para hospedar e exibir 
              esse conteúdo conforme necessário para fornecer o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cancelamento e Reembolso</h2>
            <p>
              Você pode cancelar sua assinatura a qualquer momento. Reembolsos são processados 
              de acordo com nossa política de reembolso, exceto em casos de violação dos termos, 
              especialmente a regra de tráfego pago.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitação de Responsabilidade</h2>
            <p>
              O TrustPage é fornecido "como está", sem garantias de qualquer tipo. Não nos 
              responsabilizamos por perdas ou danos resultantes do uso do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              Alterações significativas serão comunicadas por email ou através do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato através do email:{" "}
              <a href="mailto:atendimento@trustpageapp.com" className="text-primary hover:underline">
                atendimento@trustpageapp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
