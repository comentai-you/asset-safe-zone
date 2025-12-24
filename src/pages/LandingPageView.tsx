import { useParams } from "react-router-dom";
import { LandingPageFormData, defaultFormData } from "@/types/landing-page";
import VendedorEliteTemplate from "@/components/trustpage/templates/VendedorEliteTemplate";

const LandingPageView = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - will be replaced with Supabase fetch
  const pageData: LandingPageFormData = {
    ...defaultFormData,
    slug: slug || '',
    page_name: 'Curso Vendedor de Elite',
    headline: 'Aprenda a Vender 10x Mais Online',
    subheadline: 'O método completo que já transformou mais de 10.000 alunos',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    cta_text: 'QUERO MINHA VAGA AGORA',
    cta_url: 'https://pay.hotmart.com',
    whatsapp_number: '5511999999999',
    colors: {
      primary: '#8B5CF6',
      background: '#FFFFFF',
      text: '#1F2937'
    }
  };

  const renderTemplate = () => {
    switch (pageData.template_id) {
      case 1:
      default:
        return <VendedorEliteTemplate data={pageData} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderTemplate()}
    </div>
  );
};

export default LandingPageView;
