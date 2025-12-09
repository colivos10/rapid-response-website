import { Card } from "@/components/ui/card";
import { Building2, Ambulance, Shield, Landmark, Hospital } from "lucide-react";

const audiences = [
  {
    icon: Landmark,
    title: "Presentaciones en conferencias internacionales",
    description: "Investigación Aplicada",
    benefits: [
      "La base científica de Rapid Response ha sido presentada en conferencias de investigación de operaciones y sistemas de salud, fortaleciendo la validación técnica del modelo y su aplicabilidad en contextos reales",
    ],
  },
  {
    icon: Ambulance,
    title: "Plan piloto en Antofagasta y Coquimbo",
    description: "Piloto 2019 - 2022",
    benefits: [
      "Implementamos un piloto para optimizar la ubicación de bases SAMU y mejorar la cobertura de ambulancias. El sistema analizó miles de escenarios y mostró una mejora en la cobertura de 8 minutos de 30%"
    ],
  },
  {
    icon: Shield,
    title: "Adjudicación fondo Startup Ciencia 2025",
    description: "Investigación Aplicada",
    benefits: [
      "Rapid Response fue adjudicada en Startup Ciencia 2025, respaldo que permitirá acelerar su implementación en servicios de emergencia y reducir tiempos críticos",
    ],
  },
];

export default function AudienceSection() {
  return (
    <section className="py-16 lg:py-16" data-testid="section-audience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Impacto comprobado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma se ha desarrollado y validado en colaboración con instituciones de salud y proyectos de investigación aplicada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.slice(0, 3).map((audience, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-audience-${index}`}
            >
              <audience.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {audiences.slice(3).map((audience, index) => (
            <Card 
              key={index + 3} 
              className="p-6"
              data-testid={`card-audience-${index + 3}`}
            >
              <audience.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
