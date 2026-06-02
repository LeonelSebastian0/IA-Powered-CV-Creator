import type { Dispatch, SetStateAction } from "react"
import { useEffect } from "react"
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
  
  const handleInputChange = (index: number, campo: "empresa" | "periodo" | "descripcion", valor: string) => {
    setFormData(prev => {
      const experiencias = Array.isArray(prev.experiencias) ? [...prev.experiencias] : [];
      if (!experiencias[index]) return prev;
      experiencias[index] = { ...experiencias[index], [campo]: valor };
      return { ...prev, experiencias } as typeof prev;
    });
  }

  const agregarEmpresa = () => {
    setFormData(prev => {
      const experiencias = Array.isArray(prev.experiencias) ? [...prev.experiencias] : [];
      experiencias.push({ id: crypto.randomUUID(), empresa: "", periodo: "", descripcion: "" });
      return { ...prev, experiencias } as typeof prev;
    });
  }

  const handleRemove = (index: number) => {
    // Confirm before removing
    if (!confirm('¿Estás seguro que querés eliminar esta experiencia?')) return;

    setFormData(prev => {
      const experiencias = Array.isArray(prev.experiencias) ? prev.experiencias.filter((_, i) => i !== index) : [];
      // Ensure at least one empty experiencia exists
      if (experiencias.length === 0) experiencias.push({ id: crypto.randomUUID(), empresa: "", periodo: "", descripcion: "" });
      return { ...prev, experiencias } as typeof prev;
    });
  }

  useEffect(() => {
    // Si no hay experiencias iniciales, añadimos una por defecto para mejorar la UX
    if (!Array.isArray(formData.experiencias) || formData.experiencias.length === 0) {
      setFormData(prev => ({
        ...prev,
        experiencias: [{ id: crypto.randomUUID(), empresa: "", periodo: "", descripcion: "" }]
      } as typeof prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-sm border border-border p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Paso 2/5: Experiencia Laboral
        </h2>
        <button className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <Save className="w-4 h-4" />
          Guarda tu progreso
        </button>
      </div>

      <div className="space-y-5">
        {(formData.experiencias ?? []).map((exp, idx) => (
          <div key={exp.id}>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-foreground mb-2">
                {`Empresa ${idx + 1}`}
              </label>
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="ml-2 text-sm text-red-500 hover:text-red-600"
              >
                Eliminar
              </button>
            </div>
            <div className="relative">
              {idx === 0 ? (
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              ) : (
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              )}
              <input
                type="text"
                placeholder={`Empresa ${idx + 1}`}
                value={exp.empresa || ""}
                onChange={(e) => handleInputChange(idx, "empresa", e.target.value)}
                className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {`Periodo en Empresa ${idx + 1}`}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Ej: Ene 2020 - Dic 2022"
                  value={exp.periodo || ""}
                  onChange={(e) => handleInputChange(idx, "periodo", e.target.value)}
                  className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {`Descripción de responsabilidades y logros en Empresa ${idx + 1}`}
              </label>
              <textarea
                placeholder="Describe tus responsabilidades y logros..."
                value={exp.descripcion || ""}
                onChange={(e) => handleInputChange(idx, "descripcion", e.target.value)}
                className="w-full border border-border rounded-lg py-3 px-4 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all min-h-[96px] mt-2"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={agregarEmpresa}
          className="w-full border-2 border-dashed border-blue-600 text-blue-600 rounded-lg py-3 hover:bg-blue-600/10 transition-all"
        >
          + Agregar Empresa
        </button>
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
              ? "bg-blue-600 hover:bg-blue-700  shadow-blue-200" 
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
