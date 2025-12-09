import { SiLinkedin, SiX } from "react-icons/si";
import brandLogo from "@assets/rapid-response-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4" data-testid="link-footer-home">
              <img 
                src={brandLogo} 
                alt="Rapid Response" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Usando tecnología de optimización avanzada para reducir los tiempos de respuesta 
              de emergencia y salvar vidas.
              Operando en Chile.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a 
                href="https://www.linkedin.com/company/rapid-response-spa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#solution" 
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
                  data-testid="link-footer-solution"
                >
                  Nuestra Solución
                </a>
              </li>
              <li>
                <a 
                  href="#technology" 
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
                  data-testid="link-footer-technology"
                >
                  Tecnología
                </a>
              </li>
              <li>
                <a 
                  href="#impact" 
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
                  data-testid="link-footer-impact"
                >
                  Impacto
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
                  data-testid="link-footer-contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>ceo@rapidresponse.cl</li>
              <li>+56 94492 3478</li>
              <li>Antofagasta, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            {currentYear} Rapid Response. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a 
              href="#" 
              className="hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
              data-testid="link-privacy"
            >
              Política de Privacidad
            </a>
            <a 
              href="#" 
              className="hover-elevate active-elevate-2 px-1 py-0.5 rounded-md -mx-1"
              data-testid="link-terms"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
