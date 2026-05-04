'use client';
import { useState } from "react"
import type { FormData } from "@/types/form-data"
import { FormNavbar } from "@/components/form-navbar"
import { StepIndicator } from "@/components/step-indicator"
import { PersonalDataForm } from "@/components/personal-data-form"
import { CVPreview } from "@/components/cv-preview"
import { Experiencia } from "@/components/experiencia"

export default function CrearCVPage() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    apellidos: "",
    correoElectronico: "",
    telefono: "",
    linkedin: "",
    paisResidencia: "",
    ciudad: "",
    puesto: "",
    empresa: "",
    fechaInicio: "",
    fechaFin: "",
  })

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-50 to-emerald-50/30">
      <FormNavbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Step Indicator */}
        <StepIndicator currentStep={step} />
        
        {/* Main Content */}
         <div className="mt-8 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {/* 3. Renderizado condicional según el paso */}
            {step === 1 && (
              <PersonalDataForm 
                formData={formData} 
                setFormData={setFormData} 
                onNext={handleNext} 
              />
            )}

            {step === 2 && (
              <Experiencia 
                formData={formData} 
                setFormData={setFormData} 
                onNext={handleNext} 
                onBack={handleBack} 
              />
            )}
          </div>
          
          {/* CV Preview Section */}
          <div className="lg:w-80 xl:w-96">
            <CVPreview  formData={formData} />
          </div>
        </div>
      </main>
    </div>
  )
}