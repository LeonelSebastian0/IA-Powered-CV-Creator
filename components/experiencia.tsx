import type { Dispatch, SetStateAction } from "react"
import type { FormData } from "@/types/form-data"
import { Briefcase, Building, Calendar, ChevronLeft, ChevronRight, Save } from "lucide-react"

type ExperienciaProps = {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  onNext: () => void
  onBack: () => void
}

export function Experiencia({ formData, setFormData, onNext, onBack }: ExperienciaProps) {
  
  // Lógica de validación para este paso (opcional por ahora)
  const isFormValid = true; // Aquí puedes validar que los campos de experiencia no estén vacíos

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-950">
          Paso 2/5: Experiencia Laboral
        </h2>
        <button className="hidden md:flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm">
          <Save className="w-4 h-4" />
          Guarda tu progreso
        </button>
      </div>

      <div className="space-y-5">
        {/* Empresa 1*/}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Empresa 1
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Empresa 1"
              value={formData.empresa1 || ""}
              onChange={(e) => setFormData({ ...formData, empresa1: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
        </div>

        {/* Empresa 2*/}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Empresa 2
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Empresa 2"
              value={formData.empresa2 || ""}
              onChange={(e) => setFormData({ ...formData, empresa2: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
        </div>


        {/* empresa 3*/}
      <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Empresa 3
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Empresa 3"
              value={formData.empresa3 || ""}
              onChange={(e) => setFormData({ ...formData, empresa3: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
        </div>
      </div>


      
      
    
      

      {/* Botones de Navegación */}
      <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-slate-950 transition-colors font-medium"
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
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"}
          `}
        >
          SIGUIENTE
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
