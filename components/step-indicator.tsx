import { User, Briefcase, GraduationCap, Star, Eye } from "lucide-react"

interface StepIndicatorProps {
  currentStep: number
}

const steps = [
  { number: 1, icon: User, label: "Datos Personales" },
  { number: 2, icon: Briefcase, label: "Experiencia" },
  { number: 3, icon: GraduationCap, label: "Educación" },
  { number: 4, icon: Star, label: "Habilidades" },
  { number: 5, icon: Eye, label: "Vista Previa" },
]

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-sm border border-border px-8 py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = step.number === currentStep
          const isCompleted = step.number < currentStep
          
          return (
            <div key={step.number} className="flex items-center">
              {/* Step */}
              <div className="flex items-center gap-3">
                {/* Number Badge */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${isActive 
                      ? "bg-blue-vibrant text-white" 
                      : isCompleted 
                        ? "bg-blue-vibrant text-white"
                        : "bg-muted text-muted-foreground"
                    }
                  `}
                >
                  {step.number}
                </div>
                
                {/* Icon */}
                <Icon
                  className={`w-5 h-5 ${
                    isActive || isCompleted ? "text-blue-vibrant" : "text-muted-foreground"
                  }`}
                />
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 mx-4
                    ${step.number < currentStep ? "bg-blue-vibrant" : "bg-border"}
                  `}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
