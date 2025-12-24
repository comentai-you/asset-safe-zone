import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LandingPageFormData } from "@/types/landing-page";

interface ConversionTabProps {
  formData: LandingPageFormData;
  onChange: (data: Partial<LandingPageFormData>) => void;
}

const ConversionTab = ({ formData, onChange }: ConversionTabProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="cta_text">Texto do Botão (CTA)</Label>
        <Input
          id="cta_text"
          value={formData.cta_text}
          onChange={(e) => onChange({ cta_text: e.target.value })}
          placeholder="Ex: Comprar Agora"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cta_url">Link de Pagamento</Label>
        <Input
          id="cta_url"
          value={formData.cta_url}
          onChange={(e) => onChange({ cta_url: e.target.value })}
          placeholder="https://pay.hotmart.com/..."
        />
        <p className="text-xs text-muted-foreground">
          Link para Hotmart, Kiwify, Eduzz, etc.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp_number">Número do WhatsApp</Label>
        <Input
          id="whatsapp_number"
          value={formData.whatsapp_number}
          onChange={(e) => onChange({ whatsapp_number: e.target.value.replace(/\D/g, '') })}
          placeholder="5511999999999"
        />
        <p className="text-xs text-muted-foreground">
          Apenas números, com código do país (55 para Brasil)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pix_pixel_id">ID do Pixel de Rastreio</Label>
        <Input
          id="pix_pixel_id"
          value={formData.pix_pixel_id}
          onChange={(e) => onChange({ pix_pixel_id: e.target.value })}
          placeholder="Ex: 1234567890"
        />
        <p className="text-xs text-muted-foreground">
          Facebook Pixel, Google Analytics, etc.
        </p>
      </div>

      <div className="space-y-3">
        <Label>Cores do Tema</Label>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="color_primary" className="text-xs">Cor Principal</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color_primary"
                value={formData.colors.primary}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, primary: e.target.value } 
                })}
                className="h-10 w-10 rounded cursor-pointer border-0"
              />
              <Input
                value={formData.colors.primary}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, primary: e.target.value } 
                })}
                className="flex-1 text-xs"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="color_background" className="text-xs">Fundo</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color_background"
                value={formData.colors.background}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, background: e.target.value } 
                })}
                className="h-10 w-10 rounded cursor-pointer border-0"
              />
              <Input
                value={formData.colors.background}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, background: e.target.value } 
                })}
                className="flex-1 text-xs"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="color_text" className="text-xs">Texto</Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color_text"
                value={formData.colors.text}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, text: e.target.value } 
                })}
                className="h-10 w-10 rounded cursor-pointer border-0"
              />
              <Input
                value={formData.colors.text}
                onChange={(e) => onChange({ 
                  colors: { ...formData.colors, text: e.target.value } 
                })}
                className="flex-1 text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionTab;
