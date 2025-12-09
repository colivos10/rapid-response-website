import { Card } from "@/components/ui/card";
import { BarChart3, List, Rocket, MonitorCheck } from "lucide-react";

const features = [
  {
    icon: List,
    title: "Registro de emergencias",
    description: "Registra cada emergencia con rapidez y precisión: ubicación, tipo de evento y datos del paciente. Todo queda organizado en un historial accesible que mejora la trazabilidad y la toma de decisiones.",
  },
  {
    icon: BarChart3,
    title: "Análitica de datos",
    description: "Analiza cobertura, demanda y tiempos de respuesta en una vista integrada, permitiendo identificar brechas y evaluar mejoras operativas con datos reales.",
  },
  {
    icon: MonitorCheck,
    title: "Panel operativo en tiempo real",
    description: "Visualiza en un mapa la ubicación de ambulancias, bases, tiempos estimados de llegada y nivel de ocupación del sistema.",
  },
  {
    icon: Rocket,
    title: "Simulación",
    description: "Evalúa escenarios ¿qué pasaría si..? para justificar inversiones, abrir nuevas bases, modificar turnos o rediseñar la red de atención, usando evidencia cuantitativa.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 lg:py-20 bg-muted/30" data-testid="section-technology">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Cómo funciona nuestra tecnología
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Rapid Response es una plataforma de gestión de emergencias que ayuda a reducir los tiempos de respuesta en emergencias médicas, combinando geolocalización, modelos matemáticos y visualización clara para los equipos de salud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-tech-${index}`}
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
