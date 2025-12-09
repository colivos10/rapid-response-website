import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import brandLogo from "@assets/rapid-response-logo.png";

interface NavigationProps {
  onRequestDemo: () => void;
}

export default function Navigation({ onRequestDemo }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Solución", href: "#solution" },
    { label: "Tecnología", href: "#technology" },
    { label: "Impacto", href: "#impact" },
    { label: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a 
            href="#" 
            className="flex items-center flex-shrink-0"
            data-testid="link-home"
          >
            <img 
              src={brandLogo} 
              alt="Rapid Response" 
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 flex-wrap">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Button onClick={onRequestDemo} data-testid="button-request-demo-nav">
              Solicitar prueba
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-left"
                  data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onRequestDemo();
                  setMobileMenuOpen(false);
                }} 
                className="mt-2"
                data-testid="button-request-demo-mobile"
              >
                Solicitar prueba
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
