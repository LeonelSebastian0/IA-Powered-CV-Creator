import { FileText, Mail, Linkedin } from "lucide-react"

const features = [
  {
    id: "cv-generation",
    title: "Generación de CV",
    description: "Transformá tu experiencia en un currículum de alto impacto optimizado para sistemas ATS.",
    icon: FileText,
  },
  {
    id: "cover-letters",
    title: "Cartas de Presentación",
    description: "Redactá cartas personalizadas para cada postulación que resalten tu valor único.",
    icon: Mail,
  },
  {
    id: "linkedin-profile",
    title: "Perfil de LinkedIn",
    description: "Mejorá tu presencia online con sugerencias de palabras clave y descripciones profesionales.",
    icon: Linkedin,
  },
]

export function Features() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

