import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Artistic Text Overlay */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
                Lạp Thu
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white drop-shadow-lg font-medium">
              Bộ Sưu Tập Khăn Thu - Đông 2023
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                All Collections
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
