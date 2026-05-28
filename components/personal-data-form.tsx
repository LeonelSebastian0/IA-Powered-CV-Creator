'use client';

import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import type { FormData } from "@/types/form-data"
import { User, Mail, Phone, Link as LinkIcon, Plus, ChevronLeft, ChevronRight, Save } from "lucide-react"

type PersonalDataFormProps = {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  onNext: () => void
}

export function PersonalDataForm({ formData, setFormData, onNext }: PersonalDataFormProps) {
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(formData.fotoUrl || "");
  const [showPhotoError, setShowPhotoError] = useState(false);

  useEffect(() => {
    if (formData.fotoUrl && formData.fotoUrl !== photoPreviewUrl) {
      setPhotoPreviewUrl(formData.fotoUrl);
    }
  }, [formData.fotoUrl, photoPreviewUrl]);

  useEffect(() => {
    return () => {
      if (photoPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(photoPreviewUrl);
      }
    }
  }, [photoPreviewUrl]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (photoPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(photoPreviewUrl);
    }

    const previewUrl = URL.createObjectURL(file);
    setPhotoPreviewUrl(previewUrl);
    setFormData({ ...formData, fotoUrl: previewUrl });
    setShowPhotoError(false);
  };

  const areFieldsComplete =
    formData.nombreCompleto.trim() !== '' &&
    formData.apellidos.trim() !== '' &&
    formData.correoElectronico.trim() !== '' &&
    formData.telefono.trim() !== '' &&
    formData.paisResidencia.trim() !== '' &&
    formData.ciudad.trim() !== '';

  const handleNext = () => {
    if (!formData.fotoUrl.trim()) {
      setShowPhotoError(true);
      return;
    }

    setShowPhotoError(false);
    onNext();
  };
  
  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-sm border border-border p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Paso 1/5: Datos Personales
        </h2>
        <button className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <Save className="w-4 h-4" />
          Guarda tu progreso
        </button>
      </div>
      
      {/* Form */}
      <div className="space-y-5">
        {/* Nombre Completo + Photo Upload */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              Nombre Completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Nombre Completo"
                id="Input-Nombre"
                className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                value={formData.nombreCompleto}
                onChange={(e) => setFormData({...formData, nombreCompleto: e.target.value})} 
              />
            </div>
          </div>
          
          {/* Photo Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="photo-upload"
              className={`w-24 h-28 border-2 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-600 hover:bg-blue-50/20 transition-all ${showPhotoError && !photoPreviewUrl ? 'border-red-500' : 'border-border'}`}
            >
              {photoPreviewUrl ? (
                <img
                  src={photoPreviewUrl}
                  alt="Vista previa"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Plus className="w-6 h-6" />
                  <span className="text-xs text-center px-2">Sube tu foto</span>
                </div>
              )}
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
            {showPhotoError && !photoPreviewUrl && (
              <p className="mt-2 text-xs text-red-500 text-center">
                Debes subir tu foto para continuar.
              </p>
            )}
          </div>
        </div>
        
        {/* Apellidos */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Apellidos
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              id="input-apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={(e) => setFormData({...formData, apellidos: e.target.value})}
              className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Correo Electrónico */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Correo Electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={formData.correoElectronico}
              onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
              className={`w-full border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                formData.correoElectronico && !formData.correoElectronico.includes('@')
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-border focus:ring-blue-600 focus:border-transparent'
              }`}
            />
            {formData.correoElectronico && !formData.correoElectronico.includes('@') && (
              <p className="absolute left-0 -bottom-5 text-[11px] text-red-500">Por favor ingresa un correo electrónico válido</p>
            )}
          </div>
        </div>
        
        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Teléfono
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              placeholder="+54 11 1234 5678"
              value={formData.telefono}
              onChange={(e) => {
                const soloNumeros = e.target.value.replace(/[^0-9]/g, '');
                setFormData({ ...formData, telefono: soloNumeros });
              }}
              className="w-full border border-border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* País y Ciudad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              País de Residencia
            </label>
            <select
              value={formData.paisResidencia}
              onChange={(e) => setFormData({ ...formData, paisResidencia: e.target.value })}
              className="w-full border border-border rounded-lg py-3 px-4 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Seleccionar país</option>
              <option value="argentina">Argentina</option>
              <option value="mexico">México</option>
              <option value="espana">España</option>
              <option value="colombia">Colombia</option>
              <option value="chile">Chile</option>
              <option value="peru">Perú</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Ciudad
            </label>
            <input
              type="text"
              placeholder="Ciudad"
              value={formData.ciudad}
              onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
              className="w-full border border-border rounded-lg py-3 px-4 text-foreground placeholder-muted-foreground bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Enlace a LinkedIn */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Enlace a LinkedIn
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="url"
              placeholder="https://enlacealinkedIn.com"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className={`w-full border rounded-lg py-3 pl-11 pr-4 text-foreground bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                formData.linkedin && !formData.linkedin.includes('.com')
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-border focus:ring-blue-600 focus:border-transparent'
              }`}
            />
            {formData.linkedin && !formData.linkedin.includes('.com') && (
              <p className="absolute left-0 -bottom-5 text-[11px] text-red-500 whitespace-nowrap">
                  Por favor ingresa una URL válida de LinkedIn
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ChevronLeft className="w-5 h-5" />
          Anterior
        </button>
        
         <button
          type="button"
          disabled={!areFieldsComplete}
          onClick={handleNext}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300
            ${areFieldsComplete 
              ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200" 
              : "bg-muted text-muted-foreground cursor-not-allowed"}
          `}
        >
          SIGUIENTE
          <ChevronRight className={`w-5 h-5 ${areFieldsComplete ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </div>
  )
}
