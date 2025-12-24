import { useState } from "react";
import { Search, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: Shield, label: "Transações Seguras", value: "10K+" },
    { icon: Zap, label: "Entregas Rápidas", value: "24h" },
    { icon: TrendingUp, label: "Vendedores Ativos", value: "2.5K+" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Plataforma 100% Segura com Escrow</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Compre e Venda{" "}
            <span className="gradient-text">Ativos Digitais</span>
            <br />
            com Confiança
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            O marketplace mais seguro para contas de games, redes sociais e serviços digitais. 
            Sistema de escrow integrado para proteção total.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              <div className="relative flex items-center bg-card border border-border rounded-xl overflow-hidden">
                <div className="pl-5">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Buscar contas, serviços, games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent h-14 text-base placeholder:text-muted-foreground focus-visible:ring-0"
                />
                <Button variant="gradient" size="lg" className="m-2 rounded-lg">
                  Buscar
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Free Fire", "Instagram", "TikTok", "Valorant", "Netflix"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary border border-border/50 rounded-full text-foreground/80 hover:text-foreground transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
