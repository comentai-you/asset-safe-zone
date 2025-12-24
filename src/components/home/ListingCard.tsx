import { Link } from "react-router-dom";
import { BadgeCheck, Zap, Crown, Eye, Clock } from "lucide-react";

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  tags: Array<"verified" | "fast" | "premium">;
  views: number;
  createdAt: string;
}

const tagConfig = {
  verified: {
    label: "Verificado",
    icon: BadgeCheck,
    className: "tag-verified",
  },
  fast: {
    label: "Entrega Rápida",
    icon: Zap,
    className: "tag-fast",
  },
  premium: {
    label: "Premium",
    icon: Crown,
    className: "tag-premium",
  },
};

const ListingCard = ({
  id,
  title,
  price,
  image,
  category,
  seller,
  tags,
  views,
  createdAt,
}: ListingCardProps) => {
  return (
    <Link to={`/listing/${id}`} className="group block">
      <div className="glass-card rounded-xl overflow-hidden hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-md text-foreground">
              {category}
            </span>
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg shadow-lg">
              R$ {price.toLocaleString("pt-BR")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => {
              const config = tagConfig[tag];
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md ${config.className}`}
                >
                  <config.icon className="w-3 h-3" />
                  {config.label}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Seller */}
          <p className="text-sm text-muted-foreground mb-3">
            por <span className="text-foreground">{seller}</span>
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{views} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
