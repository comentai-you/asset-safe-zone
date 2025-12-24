import { Link } from "react-router-dom";
import { Gamepad2, Users, Briefcase, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "games",
    title: "Games",
    description: "Contas de Free Fire, Valorant, LoL, Fortnite e mais",
    icon: Gamepad2,
    href: "/games",
    count: "3.2K+ anúncios",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
  {
    id: "social",
    title: "Social Media",
    description: "Instagram, TikTok, YouTube, Twitter e outras redes",
    icon: Users,
    href: "/social-media",
    count: "1.8K+ anúncios",
    gradient: "from-pink-500 to-rose-600",
    bgGlow: "bg-pink-500/10",
  },
  {
    id: "services",
    title: "Serviços Digitais",
    description: "Netflix, Spotify, Disney+, desenvolvimento e mais",
    icon: Briefcase,
    href: "/services",
    count: "950+ anúncios",
    gradient: "from-primary to-purple-600",
    bgGlow: "bg-primary/10",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore por <span className="gradient-text">Categorias</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura em nossa curadoria de ativos digitais
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 ${category.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} mb-6 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    {category.count}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
