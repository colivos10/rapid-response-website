import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="solution" className="py-16 lg:py-24" data-testid="section-problem-solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-[#011395]">
            El desafío que resolvemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Las emergencias son dinámicas, pero las bases son estáticas.<br />
          El modelo tradicional espera a que ocurra el even desde puntos fijos, generando puntos ciegos territoriales donde llegar a tiempo es imposible.

          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Tarjeta Izquierda: EL PROBLEMA (Fondo oscuro, serio) */}
          <div className="bg-[#000E54]/50 border border-gray-600/30 p-8 rounded-2xl backdrop-blur-sm flex flex-col justify-center">
            <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              {/* Icono de Alerta/Datos faltantes */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Ceguera operativa & brechas
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Hoy operamos a ciegas. La falta de registros históricos y la ausencia de trazabilidad en tiempo real impiden tomar decisiones inteligentes. Esto resulta en una baja cobertura territorial, dejando zonas vulnerables y tiempos de respuesta impredecibles.
            </p>
          </div>

          {/* Tarjeta Derecha: LA META (Fondo Azul Brillante, inspirador) */}
          <div className="bg-gradient-to-br from-[#0366FE] to-[#024bc0] p-10 rounded-3xl shadow-2xl shadow-blue-900/50 flex flex-col justify-center transform transition-transform hover:scale-[1.02]">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              {/* Icono de Meta/Bandera */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              El estándar 95% (Nacional)
            </h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              Nuestra visión es democratizar la supervivencia. Utilizando modelos predictivos, proyectamos alcanzar un <strong>95% de cobertura a nivel país</strong>. Esto significa garantizar que casi cualquier ciudadano, sin importar su ubicación, reciba ayuda dentro de la ventana vital de 8 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
