import { Card } from "@/components/ui/card";
import { Clock, Activity, Ambulance } from "lucide-react";

const stats = [
  {
    icon: Activity,
    value: "90%",
    label: "Tasa de mortalidad",
    description: "En paros cardiorrespiratorio si la ayuda llega tarde",
  },
  {
    icon: Clock,
    value: "8 min",
    label: "Ventana vital",
    description: "Después de este tiempo, la sobrevida cae a 10%",
  },
  {
    icon: Ambulance,
    value: "30%",
    label: "Cobertura efectiva",
    description: "Optimizando la flota actual, mas impacto con los mismos recursos",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`p-6 text-center transition-transform duration-300 hover:-translate-y-2 ${
                index === 0 ? 'border border-red-300' : 
                index === 1 ? 'border border-red-300' : 
                index === 2 ? 'border border-[#0366FE]' : 
                ''
              }`}
              data-testid={`card-stat-${index}`}
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-4 ${index < 2 ? 'text-red-500' : 'text-primary'}`} />
              <div className={`text-4xl lg:text-5xl font-bold tracking-tight mb-2 ${index < 2 ? 'text-red-500' : ''}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
