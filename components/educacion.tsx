import type { Dispatch, SetStateAction } from "react"
import type { FormData } from "@/types/form-data"
import { Briefcase, Building, Calendar, ChevronLeft, ChevronRight, Save } from "lucide-react"



type EducacionProps = {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  onNext: () => void
  onBack: () => void
}



export function Educacion({ formData, setFormData, onNext, onBack }: EducacionProps) {
  
  // Lógica de validación para este paso (opcional por ahora)
  const isFormValid = true; // Aquí puedes validar que los campos de educación no estén vacíos

  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-sm border border-border p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Paso 3/5: Educación
        </h2>
        <button className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <Save className="w-4 h-4" />
          Guarda tu progreso
        </button>
      </div>

      <div className="space-y-5"> 
        {/* Empresa 1*/}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Universidad/Institución 
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Institución educativa"
              value={formData.institucion || ""}
              onChange={(e) => setFormData({ ...formData, institucion: e.target.value })}
              className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
        </div>
      </div>
    

      {/* Botones de Navegación */}
      <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          Anterior
        </button>

        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300
            ${isFormValid 
              ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200" 
              : "bg-muted text-muted-foreground cursor-not-allowed"}
          `}
        >
          SIGUIENTE
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>



   




  )
}