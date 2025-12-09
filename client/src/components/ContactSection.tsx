import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ⚠️ IMPORTANTE: Reemplaza "TU_CODIGO_AQUI" con el código que te dio Formspree (ej: xmqzbdpa)
      // El link completo se verá tipo: "https://formspree.io/f/xmqzbdpa"
      const response = await fetch("https://formspree.io/projects/2888524330751229547/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Enviamos los datos que ya tienes capturados
      });

      if (response.ok) {
        // ÉXITO: Aquí puedes poner una alerta o limpiar el formulario
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        
        // Limpiamos el formulario
        setFormData({
            organizationType: "",
            name: "",
            email: "",
            phone: "",
            message: ""
        });
      } else {
        // ERROR DE FORMSPREE
        alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
      }
    } catch (error) {
      // ERROR DE RED
      alert("Error de conexión. Revisa tu internet.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24" data-testid="section-contact">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Card className="p-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">¡Gracias!</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Su solicitud de prueba ha sido recibida. Nuestro equipo se pondrá en contacto con usted dentro de 24 horas 
              para programar una demostración personalizada.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              data-testid="button-submit-another"
            >
              Enviar otra solicitud
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-20" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Solicitar una prueba
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vea cómo Rapid Response puede transformar los servicios de emergencia en su región
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Card className="lg:col-span-3 p-6 lg:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="organizationType">Tipo de Organización</Label>
                <Select
                  value={formData.organizationType}
                  onValueChange={(value) => handleChange("organizationType", value)}
                >
                  <SelectTrigger 
                    id="organizationType" 
                    className="mt-2"
                    data-testid="select-organization-type"
                  >
                    <SelectValue placeholder="Seleccione el tipo de organización" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Agencia Gubernamental</SelectItem>
                    <SelectItem value="private-ambulance">Servicio Privado</SelectItem>
                    <SelectItem value="police">Policía / Servicio de Emergencia</SelectItem>
                    <SelectItem value="city-council">Consejo Municipal / Municipalidad</SelectItem>
                    <SelectItem value="health-center">Centro de Salud</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="mt-2"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@organizacion.com"
                    className="mt-2"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Número de teléfono (Opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+56 94492 3478"
                  className="mt-2"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntenos qué te gustaría explorar..."
                  className="mt-2 min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-demo"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Solicitar prueba
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Qué esperar</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Demostración personalizada de 30 minutos adaptada a su organización</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Discusión de sus desafíos específicos de cobertura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Revisión del proceso de implementación y cronograma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Sin compromiso requerido</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Póngase en contacto</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:ceo@rapidresponse.cl" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md -mx-2"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ceo@rapidresponse.cl</span>
                </a>
                <a 
                  href="tel:+56944923478" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md -mx-2"
                  data-testid="link-phone"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+56 94492 3478</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground p-2 -mx-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Antofagasta, Chile</span>
                </div>
              </div>
            </Card>

            <p className="text-xs text-muted-foreground text-center">
              Respuesta dentro de 48 horas hábiles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
