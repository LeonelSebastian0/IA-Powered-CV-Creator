import type { FormData } from "@/types/form-data"

type CVPreviewProps = {
  formData: FormData
}

export function CVPreview({ formData }: CVPreviewProps) {
  return (
    <div className="bg-card h-auto text-card-foreground rounded-2xl shadow-lg border border-border overflow-hidden">
      {/* CV Document */}
      <div className="p-6  text-sm">
        {/* Header with photo and info */}
        <div className="flex gap-3 mb-4">
          {/* Photo placeholder */}
          <div className="w-20 h-24 bg-popover rounded-lg overflow-hidden flex items-center justify-center">
            {formData.fotoUrl ? (
              <img src={formData.fotoUrl} alt="Foto de perfil" className="w-full h-full object-cover" />
            ) : (
              <div className="w-12 h-12 bg-secondary rounded-full" />
            )}
          </div>
          
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="font-bold text-foreground text-base">{formData.nombreCompleto  || "Mateo"}  </h3> 
            <h3 className="font-bold text-foreground text-base" >{formData.apellidos || "Garcia"}</h3>
               
           
            <div className="mt-1 space-y-0.5 text-[10px] text-muted-foreground">
              
              <p><span className="font-semibold">Correo Electrónico:</span> {formData.correoElectronico || "ejemplo@correo.com"}</p>
              <p><span className="font-semibold">Teléfono:</span> {formData.telefono || "+54 11 1234 5678"}</p>
            </div>
          </div>
        </div>
        
        {/* Two column layout */}
        <div className="flex gap-3">
          {/* Left Column - Resuma */}
          <div className="w-1/3 space-y-3">
            {/* Resuma Section */}
            <div>
              <h4 className="font-bold text-blue-600 text-[10px] uppercase tracking-wider border-b border-blue-600 pb-1 mb-2">
                Resuma
              </h4>
              <div className="space-y-1">
                <p className="text-[9px] text-muted-foreground">Nombre</p>
                <p className="text-[9px] text-foreground"> {formData.nombreCompleto || "Mateo"}</p>

                <p className="text-[9px] text-muted-foreground mt-2">Correo Electrónico</p>
                
                <p className="text-[9px] text-foreground"  style={{fontSize: (formData.correoElectronico?.length || 0) > 20 ? '7px'  : '9px' }}
                >{formData.correoElectronico || "ejemplo@gmail.com"}
                  </p>
                <p className="text-[9px] text-muted-foreground mt-2">Teléfono</p>
                <p
                  className="text-[9px] text-foreground"
                  style={{ fontSize: (formData.telefono?.length || 0) > 15 ? '7px' : '9px' }}
                >
                  {formData.telefono || "(115) 356 7890"}
                </p>
                <p className="text-[9px] text-muted-foreground mt-2"> Ciudad</p>
                <p className="text-[9px] text-foreground"> {formData.ciudad || "(115) 356 7890"}</p>
              </div>
            </div>
            
              {/* LinkedIn Section */}
            <div>
              <h4 className="font-bold text-blue-600 text-[10px] uppercase tracking-wider border-b border-blue-600 pb-1 mb-2">
                linkedIn
              </h4>
              <p className="text-[9px] text-muted-foreground">{ formData.linkedin || "LinkedIn.com"}</p>
            </div>
          </div>
          
          {/* Right Column - Experiencia */}
          <div className="w-2/3 space-y-3">
            {/* Experiencia Section */}
            <div>
              <h4 className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-2">
                Experiencia
              </h4>
              
              {(formData.experiencias ?? []).map((exp, idx) => (
                <div className="mb-3" key={exp.id}>
                  <div className="flex items-start gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
                    <div>
                      <p className="font-semibold text-[9px] text-foreground">{exp.empresa || `Empresa ${idx + 1}`}</p>
                      <p className="text-[8px] text-muted-foreground">{exp.periodo || (idx === 0 ? "EJ = Mex 2011 - May 2019" : "Jul 2019 - Jul 2019")}</p>
                    </div>
                  </div>
                  <ul className="ml-3 mt-1 space-y-0.5">
                    <li className="text-[8px] text-muted-foreground">• Descripción</li>
                    <p className="font-semibold text-[8px] text-foreground">{exp.descripcion || ""}</p>
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Educación Seccion*/}
            <div>
              <h4 className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-2">
                Educación
              </h4>
              <p className="font-semibold text-[9px] text-foreground">Resuma: Dalled Nutroojinate</p>
              <p className="text-[8px] text-muted-foreground">Mons opsioias, consetetr.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
