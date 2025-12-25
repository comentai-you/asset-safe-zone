import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Posso usar o link do TrustPage em Anúncios (Facebook/Google Ads)?",
    answer: `Não no Plano Essencial. Para garantir a segurança da rede, é estritamente proibido rodar tráfego pago direto para links compartilhados (trustpage.com/voce). O sistema detecta e penaliza automaticamente. Para anunciar, você deve fazer o Upgrade e usar Domínio Próprio.`,
  },
  {
    question: "Como funciona o Teste Grátis de 14 dias?",
    answer: `Ao se cadastrar, você tem acesso completo a todos os recursos do plano Essencial por 14 dias, sem precisar cadastrar cartão de crédito. Durante esse período, suas páginas ficam ativas e você pode testar todas as funcionalidades. Após os 14 dias, caso não faça o upgrade, suas páginas serão temporariamente desativadas até a regularização.`,
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: `Aceitamos as principais formas de pagamento: cartão de crédito (Visa, Mastercard, Elo, American Express), Pix (pagamento instantâneo com desconto) e boleto bancário. Para assinaturas recorrentes, recomendamos o cartão de crédito para evitar interrupções no serviço.`,
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: `Sim! Você pode cancelar sua assinatura a qualquer momento diretamente no painel. Não há multa de fidelidade. Ao cancelar, você mantém acesso até o final do período já pago.`,
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tudo o que você precisa saber sobre o TrustPage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
