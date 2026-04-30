'use client';
import { useState } from "react"
import { FormNavbar } from "@/components/form-navbar"
import { StepIndicator } from "@/components/step-indicator"
import { PersonalDataForm } from "@/components/personal-data-form"
import { CVPreview } from "@/components/cv-preview"

type FormData = {
  nombreCompleto: string
  apellidos: string
  correoElectronico: string
  telefono: string
  linkedin: string
  paisResidencia: string
  ciudad: string
}

export default function CrearCVPage() {

  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    apellidos: "",
    correoElectronico: "",
    telefono: "",
    linkedin: "",
    paisResidencia: "",
    ciudad: "",
  })
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-50 to-emerald-50/30">
      <FormNavbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Step Indicator */}
        <StepIndicator currentStep={1} />
        
        {/* Main Content */}
        <div className="mt-8 flex flex-col lg:flex-row gap-6">
          {/* Form Section */}
          <div className="flex-1">
            <PersonalDataForm formData={formData} setFormData={setFormData} />
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