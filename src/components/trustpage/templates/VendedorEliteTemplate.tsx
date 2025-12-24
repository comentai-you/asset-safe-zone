import { useState, useEffect } from "react";
import { LandingPageFormData } from "@/types/landing-page";
import { Play, MessageCircle, ShoppingCart } from "lucide-react";

interface VendedorEliteTemplateProps {
  data: LandingPageFormData;
}

const VendedorEliteTemplate = ({ data }: VendedorEliteTemplateProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getVideoEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    
    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    
    return null;
  };

  const embedUrl = getVideoEmbedUrl(data.video_url);

  return (
    <div 
      className="min-h-full flex flex-col"
      style={{ 
        backgroundColor: data.colors.background,
        color: data.colors.text 
      }}
    >
      {/* Scarcity Timer */}
      <div 
        className="sticky top-0 z-10 py-2 px-4 text-center text-sm font-medium"
        style={{ backgroundColor: data.colors.primary, color: '#FFFFFF' }}
      >
        <span className="animate-pulse">🔥 OFERTA EXPIRA EM: </span>
        <span className="font-bold">
          {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center gap-3">
          {data.profile_image_url ? (
            <img
              src={data.profile_image_url}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4"
              style={{ borderColor: data.colors.primary }}
            />
          ) : (
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: data.colors.primary, color: '#FFFFFF' }}
            >
              {data.page_name?.charAt(0) || 'T'}
            </div>
          )}
          <p className="text-sm opacity-80">{data.page_name || 'Sua Marca'}</p>
        </div>

        {/* Headline */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold leading-tight">
            {data.headline || 'Seu Título Aqui'}
          </h1>
          {data.subheadline && (
            <p className="text-sm opacity-80">
              {data.subheadline}
            </p>
          )}
        </div>

        {/* Video */}
        {embedUrl ? (
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : data.image_url ? (
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src={data.image_url}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div 
            className="aspect-video rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${data.colors.primary}20` }}
          >
            <Play className="w-12 h-12 opacity-50" />
          </div>
        )}

        {/* Description */}
        {data.description && (
          <p className="text-sm leading-relaxed opacity-90 text-center">
            {data.description}
          </p>
        )}
      </div>

      {/* Floating CTA */}
      <div className="sticky bottom-0 p-4 space-y-2" style={{ backgroundColor: data.colors.background }}>
        <button
          className="w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          style={{ backgroundColor: data.colors.primary, color: '#FFFFFF' }}
        >
          <ShoppingCart className="w-5 h-5" />
          {data.cta_text || 'Comprar Agora'}
        </button>
        
        {data.whatsapp_number && (
          <button
            className="w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 border"
            style={{ borderColor: data.colors.primary, color: data.colors.primary }}
          >
            <MessageCircle className="w-4 h-4" />
            Dúvidas? Fale no WhatsApp
          </button>
        )}
      </div>
    </div>
  );
};

export default VendedorEliteTemplate;
