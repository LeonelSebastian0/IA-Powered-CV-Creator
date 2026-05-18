import type { FormData } from "@/types/form-data"

type CVPreviewProps = {
  formData: FormData
}

export function CVPreview({ formData }: CVPreviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* CV Document */}
      <div className="p-4 text-xs">
        {/* Header with photo and info */}
        <div className="flex gap-3 mb-4">
          {/* Photo placeholder */}
          <div className="w-16 h-20 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-blue-300 rounded-full" />
          </div>
          
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="font-bold text-slate-950 text-base">{formData.nombreCompleto  || "Mateo"}  </h3> 
            <h3 className="font-bold text-slate-950 text-base" >{formData.apellidos || "Garcia"}</h3>
               
           
            <div className="mt-1 space-y-0.5 text-[10px] text-gray-600">
              
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
                <p className="text-[9px] text-gray-500">Nombre</p>
                <p className="text-[9px] text-slate-950"> {formData.nombreCompleto || "Mateo"}</p>

                <p className="text-[9px] text-gray-500 mt-2">Correo Electrónico</p>
                
                <p className="text-[9px] text-slate-950"  style={{fontSize: (formData.correoElectronico?.length || 0) > 20 ? '7px'  : '9px' }}
                >{formData.correoElectronico || "ejemplo@gmail.com"}
                  </p>
                <p className="text-[9px] text-gray-500 mt-2">Teléfono</p>
                <p
                  className="text-[9px] text-slate-950"
                  style={{ fontSize: (formData.telefono?.length || 0) > 15 ? '7px' : '9px' }}
                >
                  {formData.telefono || "(115) 356 7890"}
                </p>
                <p className="text-[9px] text-gray-500 mt-2"> Ciudad</p>
                <p className="text-[9px] text-slate-950"> {formData.ciudad || "(115) 356 7890"}</p>
              </div>
            </div>
            
              {/* LinkedIn Section */}
            <div>
              <h4 className="font-bold text-blue-600 text-[10px] uppercase tracking-wider border-b border-blue-600 pb-1 mb-2">
                linkedIn
              </h4>
              <p className="text-[9px] text-gray-600">{ formData.linkedin || "LinkedIn.com"}</p>
            </div>
          </div>
          
          {/* Right Column - Experiencia */}
          <div className="w-2/3 space-y-3">
            {/* Experiencia Section */}
            <div>
              <h4 className="font-bold text-slate-950 text-[10px] uppercase tracking-wider mb-2">
                Experiencia
              </h4>
              
              {/* Job 1 */}
              <div className="mb-3">
                <div className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
                  <div>
                    <p className="font-semibold text-[9px] text-slate-950">Nombre Completo</p>
                    <p className="text-[8px] text-gray-500">Mex 2011 - May 2019</p>
                  </div>
                </div>
                <ul className="ml-3 mt-1 space-y-0.5">
                  <li className="text-[8px] text-gray-600">• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li className="text-[8px] text-gray-600">• Sed do eiusmod tempor incididunt ut labore.</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div>
                <div className="flex items-start gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
                  <div>
                    <p className="font-semibold text-[9px] text-slate-950">{formData.empresa || "Empresa " } </p>
                    <p className="text-[8px] text-gray-500">Jul 2019 - Jul 2019</p>
                  </div>
                </div>
                <ul className="ml-3 mt-1 space-y-0.5">
                  <li className="text-[8px] text-gray-600">• Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                  <li className="text-[8px] text-gray-600">• Commoncod incididunt ut labore et magna.</li>
                </ul>
              </div>
            </div>
            
            {/* Educación Section */}
            <div>
              <h4 className="font-bold text-slate-950 text-[10px] uppercase tracking-wider mb-2">
                Educación
              </h4>
              <p className="font-semibold text-[9px] text-slate-950">Resuma: Dalled Nutroojinate</p>
              <p className="text-[8px] text-gray-600">Mons opsioias, consetetr.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
