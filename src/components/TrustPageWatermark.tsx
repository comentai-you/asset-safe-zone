import { Zap } from "lucide-react";

interface TrustPageWatermarkProps {
  ownerPlan: string | null;
}

const TrustPageWatermark = ({ ownerPlan }: TrustPageWatermarkProps) => {
  // Only show watermark for non-PRO users (trial and essential)
  // PRO users get white-label (no watermark)
  if (ownerPlan === 'pro' || ownerPlan === 'elite') {
    return null;
  }

  return (
    <a
      href="https://trustpage.app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-black/80 backdrop-blur-sm text-white/90 text-xs font-medium hover:bg-black/90 transition-colors"
    >
      <span>Feito com</span>
      <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
      <span className="font-semibold">TrustPage</span>
    </a>
  );
};

export default TrustPageWatermark;
