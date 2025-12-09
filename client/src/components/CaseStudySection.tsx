import { Card } from "@/components/ui/card";
import { SiLinkedin } from "react-icons/si";

const teamMembers = [
  // First row - 3 people
  {
    name: "Carlos Olivos Matus",
    role: "Co-fundador & Director Científico",
    image: "/carlos-olivos-foto.png",
    linkedin: "https://cl.linkedin.com/in/carlos-olivos-b6a965144",
  },
  {
    name: "Hernán Cáceres Venegas",
    role: "Co-fundador",
    image: "/hernan-caceres-foto.png",
    linkedin: "https://cl.linkedin.com/in/hecaceres/en",
  },
  {
    name: "Andrea Fernández Montero",
    role: "CEO",
    image: "/andrea-fernandez-foto.png",
    linkedin: "https://cl.linkedin.com/in/andrea-fern%C3%A1ndez-montero-337676169",
  },
  // Second row - 4 people

];

const sponsors = [
  {
    name: "Financiado por",
    description: "Agencia Nacional de Investigación y Desarollo del Ministerio de Ciencia, Tecnología, Conocimiento e Innovación",
    logo: "/anid_rojo_azul.png",
  },
  {
    name: "Apoyado por",
    description: "Universidad Católica del Norte",
    logo: "/copialogo.png",
  },
];

export default function CaseStudySection() {
  return (
    <section className="py-16 lg:py-12 bg-primary/5" data-testid="section-case-study">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Equipo de liderazgo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* First row - 3 team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </Card>
          ))}

        </div>

        {/* Sponsors section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Alianzas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 flex items-center justify-center rounded-lg overflow-hidden mx-auto">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain mx-auto"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{sponsor.name}</h4>
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
