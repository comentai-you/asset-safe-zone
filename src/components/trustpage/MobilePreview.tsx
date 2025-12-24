import { LandingPageFormData } from "@/types/landing-page";
import VendedorEliteTemplate from "./templates/VendedorEliteTemplate";

interface MobilePreviewProps {
  formData: LandingPageFormData;
}

const MobilePreview = ({ formData }: MobilePreviewProps) => {
  const renderTemplate = () => {
    switch (formData.template_id) {
      case 1:
      default:
        return <VendedorEliteTemplate data={formData} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-8">
      <p className="text-sm text-muted-foreground mb-4">Visualização em Tempo Real</p>
      
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="w-[280px] h-[580px] bg-foreground rounded-[40px] p-2 shadow-2xl">
          {/* Phone inner bezel */}
          <div className="w-full h-full bg-foreground rounded-[32px] p-1">
            {/* Screen */}
            <div className="w-full h-full bg-background rounded-[28px] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-20" />
              
              {/* Content */}
              <div className="w-full h-full overflow-y-auto scrollbar-hide pt-6">
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>
        
        {/* Side button */}
        <div className="absolute right-[-2px] top-24 w-1 h-12 bg-foreground rounded-r" />
        <div className="absolute left-[-2px] top-20 w-1 h-8 bg-foreground rounded-l" />
        <div className="absolute left-[-2px] top-32 w-1 h-12 bg-foreground rounded-l" />
      </div>
    </div>
  );
};

export default MobilePreview;
