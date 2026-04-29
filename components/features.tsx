import { FileText, Mail, UserCheck } from "lucide-react"

const features = [
  {
    id: "cv-generation",
    title: "Generación de CV",
    icon: FileText,
  },
  {
    id: "cover-letters",
    title: "Cartas de presentación",
    icon: Mail,
  },
  {
    id: "profile-optimization",
    title: "Optimización de perfil",
    icon: UserCheck,
  },
]

function PlaceholderLines() {
  return (
    <div className="space-y-3 mt-4">
      <div className="h-3 bg-gray-200 rounded-full w-full" />
      <div className="h-3 bg-gray-200 rounded-full w-5/6" />
      <div className="h-3 bg-gray-200 rounded-full w-4/5" />
      <div className="h-3 bg-gray-200 rounded-full w-3/4" />
    </div>
  )
}

export function Features() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">
                {feature.title}
              </h3>
              <PlaceholderLines />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
