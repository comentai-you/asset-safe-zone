import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LandingPageFormData, templates } from "@/types/landing-page";
import { Check, Layout } from "lucide-react";

interface IdentityTabProps {
  formData: LandingPageFormData;
  onChange: (data: Partial<LandingPageFormData>) => void;
}

const IdentityTab = ({ formData, onChange }: IdentityTabProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="page_name">Nome da Página</Label>
        <Input
          id="page_name"
          value={formData.page_name}
          onChange={(e) => onChange({ page_name: e.target.value })}
          placeholder="Ex: Meu Produto Digital"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">URL da Página</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">trustpage.com/</span>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => onChange({ slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
            placeholder="minha-pagina"
            className="flex-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile_image_url">URL da Foto de Perfil</Label>
        <Input
          id="profile_image_url"
          value={formData.profile_image_url}
          onChange={(e) => onChange({ profile_image_url: e.target.value })}
          placeholder="https://exemplo.com/foto.jpg"
        />
      </div>

      <div className="space-y-3">
        <Label>Escolha o Template</Label>
        <div className="grid grid-cols-1 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => onChange({ template_id: template.id })}
              className={`relative flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${
                formData.template_id === template.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <Layout className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{template.name}</p>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
              {formData.template_id === template.id && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdentityTab;
