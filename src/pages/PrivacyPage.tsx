import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
            <p>
              O TrustPage está comprometido em proteger sua privacidade. Esta política descreve 
              como coletamos, usamos e protegemos suas informações pessoais quando você usa 
              nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos os seguintes tipos de informações:</p>
            
            <h3 className="text-xl font-medium text-foreground mt-4 mb-2">2.1 Informações de Conta</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Informações de perfil (opcional)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-4 mb-2">2.2 Informações de Uso</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Páginas visitadas e ações realizadas</li>
              <li>Endereço IP e informações do navegador</li>
              <li>Dados de desempenho das landing pages</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-4 mb-2">2.3 Informações de Pagamento</h3>
            <p>
              Processamos pagamentos através de provedores terceirizados seguros. 
              Não armazenamos dados completos de cartão de crédito em nossos servidores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Como Usamos Suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Processar transações e gerenciar sua conta</li>
              <li>Enviar comunicações importantes sobre o serviço</li>
              <li>Analisar uso e otimizar a experiência do usuário</li>
              <li>Detectar e prevenir fraudes e abusos (incluindo violações de uso de ads)</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Monitoramento de Tráfego</h2>
            <p>
              Para garantir a conformidade com nossos Termos de Uso, especialmente a regra de 
              proibição de tráfego pago no Plano Essencial, monitoramos parâmetros de URL que 
              indicam origem de tráfego pago (como fbclid, gclid, etc.).
            </p>
            <p className="mt-2">
              Este monitoramento é realizado automaticamente e os dados são utilizados 
              exclusivamente para fins de conformidade e segurança da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento de Dados</h2>
            <p>Não vendemos suas informações pessoais. Podemos compartilhar dados com:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provedores de serviços que nos ajudam a operar a plataforma</li>
              <li>Autoridades legais quando exigido por lei</li>
              <li>Parceiros de negócios com seu consentimento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações, incluindo:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimentos</li>
              <li>Portabilidade dos dados</li>
              <li>Ser informado sobre o uso de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
              analisar tráfego e personalizar conteúdo. Você pode controlar o uso de 
              cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pelo tempo necessário para fornecer nossos serviços 
              e cumprir obrigações legais. Após o encerramento da conta, dados podem ser 
              retidos por até 5 anos para fins legais e fiscais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Alterações na Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
              significativas por email ou através do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contato</h2>
            <p>
              Para questões sobre privacidade ou exercer seus direitos, entre em contato:{" "}
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

export default PrivacyPage;
