import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ListingCard from "./ListingCard";

const mockListings: Array<{
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  tags: Array<"verified" | "fast" | "premium">;
  views: number;
  createdAt: string;
}> = [
  {
    id: "1",
    title: "Conta Free Fire Level 80 - Full Diamante Royale",
    price: 350,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    category: "Games",
    seller: "ProGamer123",
    tags: ["verified", "fast"],
    views: 234,
    createdAt: "2h atrás",
  },
  {
    id: "2",
    title: "Instagram 50K Seguidores - Nicho Fitness",
    price: 1200,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    category: "Social Media",
    seller: "SocialKing",
    tags: ["verified", "premium"],
    views: 567,
    createdAt: "4h atrás",
  },
  {
    id: "3",
    title: "Netflix Premium 1 Ano - 4 Telas UHD",
    price: 89,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
    category: "Serviços",
    seller: "StreamDeals",
    tags: ["fast"],
    views: 892,
    createdAt: "5h atrás",
  },
  {
    id: "4",
    title: "Conta Valorant Imortal 3 - Skins Raras",
    price: 850,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    category: "Games",
    seller: "ValorantPro",
    tags: ["verified", "premium", "fast"],
    views: 445,
    createdAt: "6h atrás",
  },
  {
    id: "5",
    title: "TikTok 100K+ Seguidores Orgânicos",
    price: 2500,
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&h=300&fit=crop",
    category: "Social Media",
    seller: "TikTokMaster",
    tags: ["verified", "premium"],
    views: 321,
    createdAt: "8h atrás",
  },
  {
    id: "6",
    title: "Spotify Premium Vitalício - Upgrade",
    price: 45,
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    category: "Serviços",
    seller: "MusicDeals",
    tags: ["fast", "verified"],
    views: 1203,
    createdAt: "10h atrás",
  },
  {
    id: "7",
    title: "League of Legends Diamante 1 - 200+ Skins",
    price: 1500,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "Games",
    seller: "LoLChallenger",
    tags: ["verified", "premium"],
    views: 678,
    createdAt: "12h atrás",
  },
  {
    id: "8",
    title: "YouTube 25K Inscritos - Monetizado",
    price: 3500,
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
    category: "Social Media",
    seller: "ContentCreator",
    tags: ["verified", "premium", "fast"],
    views: 445,
    createdAt: "14h atrás",
  },
];

const RecentListingsSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Anúncios <span className="gradient-text">Recentes</span>
            </h2>
            <p className="text-muted-foreground">
              Confira as últimas oportunidades disponíveis
            </p>
          </div>
          <Link to="/browse">
            <Button variant="outline" className="gap-2">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((listing, index) => (
            <div
              key={listing.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ListingCard {...listing} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="gap-2">
            Carregar Mais Anúncios
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentListingsSection;
