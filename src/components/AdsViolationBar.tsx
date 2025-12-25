import { AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdsViolationBarProps {
  onUpgrade?: () => void;
}

const AdsViolationBar = ({ onUpgrade }: AdsViolationBarProps) => {
  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      // Default: redirect to pricing/upgrade
      window.location.href = "/auth";
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#DC2626] min-h-[80px] flex items-center justify-center px-4 py-4 shadow-2xl animate-pulse">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-white flex-shrink-0" />
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">
              🚫 VIOLAÇÃO DE TERMOS
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-semibold mt-1">
              É PROIBIDO rodar Tráfego Pago no Plano Essencial. Este link corre risco de banimento imediato. Remova o anúncio ou faça Upgrade.
            </p>
          </div>
        </div>
        
        <Button
          onClick={handleUpgrade}
          className="bg-white hover:bg-white/90 text-[#DC2626] font-bold text-sm sm:text-base px-6 py-3 h-auto whitespace-nowrap flex-shrink-0"
        >
          Regularizar Agora
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default AdsViolationBar;
