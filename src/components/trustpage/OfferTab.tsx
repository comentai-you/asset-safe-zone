import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LandingPageFormData } from "@/types/landing-page";

interface OfferTabProps {
  formData: LandingPageFormData;
  onChange: (data: Partial<LandingPageFormData>) => void;
}

const OfferTab = ({ formData, onChange }: OfferTabProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="headline">Título Principal (Headline)</Label>
        <Input
          id="headline"
          value={formData.headline}
          onChange={(e) => onChange({ headline: e.target.value })}
          placeholder="Ex: Transforme sua vida em 30 dias"
        />
        <p className="text-xs text-muted-foreground">
          O título que vai chamar a atenção do visitante
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subheadline">Subtítulo</Label>
        <Input
          id="subheadline"
          value={formData.subheadline}
          onChange={(e) => onChange({ subheadline: e.target.value })}
          placeholder="Ex: O método completo para alcançar seus objetivos"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="video_url">Link do Vídeo (YouTube/Vimeo)</Label>
        <Input
          id="video_url"
          value={formData.video_url}
          onChange={(e) => onChange({ video_url: e.target.value })}
          placeholder="https://youtube.com/watch?v=..."
        />
        <p className="text-xs text-muted-foreground">
          Cole a URL completa do vídeo
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição do Produto</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="Descreva os benefícios e características do seu produto..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image_url">URL da Imagem do Produto</Label>
        <Input
          id="image_url"
          value={formData.image_url}
          onChange={(e) => onChange({ image_url: e.target.value })}
          placeholder="https://exemplo.com/produto.jpg"
        />
      </div>
    </div>
  );
};

export default OfferTab;
