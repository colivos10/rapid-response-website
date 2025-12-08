import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/emergency_response_city_aerial.png";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export default function HeroSection({ onRequestDemo }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Saving Lives with
          <span className="block text-primary-foreground">Optimization</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Advanced algorithms that strategically reposition emergency vehicles, 
          reducing response times when every second counts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button 
            size="lg" 
            onClick={onRequestDemo}
            className="bg-white text-black border-white/20 backdrop-blur-md"
            data-testid="button-request-demo-hero"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white bg-white/10 backdrop-blur-md"
            onClick={() => {
              const el = document.querySelector("#solution");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-learn-more"
          >
            <Play className="mr-2 h-4 w-4" />
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
