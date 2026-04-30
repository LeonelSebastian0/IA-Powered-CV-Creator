import { type Dispatch, type SetStateAction } from "react"
import { User, Mail, Phone, Link as LinkIcon, Plus, ChevronLeft, ChevronRight, Save } from "lucide-react"

type PersonalDataFormData = {
  nombreCompleto: string
  apellidos: string
  correoElectronico: string
  telefono: string
  linkedin: string
  paisResidencia: string
  ciudad: string
}

type PersonalDataFormProps = {
  formData: PersonalDataFormData
  setFormData: Dispatch<SetStateAction<PersonalDataFormData>>
}

export function PersonalDataForm({ formData, setFormData }: PersonalDataFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-950">
          Paso 1/5: Datos Personales
        </h2>
        <button className="hidden md:flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm">
          <Save className="w-4 h-4" />
          Guarda tu progreso
        </button>
      </div>
      
      {/* Form */}
      <div className="space-y-5">
        {/* Nombre Completo + Photo Upload */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-950 mb-2">
              Nombre Completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Nombre Completo"
                id = "Input-Nombre"
                className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                value={formData.nombreCompleto}
                onChange={(e) => setFormData({...formData, nombreCompleto: e.target.value})} 
              />
            </div>
          </div>
          
          {/* Photo Upload */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-28 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-600 hover:bg-blue-50/50 transition-all">
              <Plus className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-500 text-center px-2">Sube tu foto</span>
            </div>
          </div>
        </div>
        
        {/* Apellidos */}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Apellidos
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="input-apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={(e) => setFormData({...formData, apellidos: e.target.value})}
              className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Correo Electrónico */}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Correo Electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={formData.correoElectronico}
              onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
              className={`w-full border rounded-lg py-3 pl-11 pr-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                formData.correoElectronico && !formData.correoElectronico.includes('@')
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-blue-600 focus:border-transparent'
              }`}
            />
            {formData.correoElectronico && !formData.correoElectronico.includes('@') && (
              <p className="absolute left-0 -bottom-5 text-[11px] text-red-500">Por favor ingresa un correo electrónico válido</p>
            )}
          </div>
        </div>
        
        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Teléfono
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="+54 11 1234 5678"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* País y Ciudad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-950 mb-2">
              País de Residencia
            </label>
            <select
              value={formData.paisResidencia}
              onChange={(e) => setFormData({ ...formData, paisResidencia: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-slate-950 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none cursor-pointer"
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
            <label className="block text-sm font-medium text-slate-950 mb-2">
              Ciudad
            </label>
            <input
              type="text"
              placeholder="Ciudad"
              value={formData.ciudad}
              onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Enlace a LinkedIn */}
        <div>
          <label className="block text-sm font-medium text-slate-950 mb-2">
            Enlace a LinkedIn
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              placeholder="https://enlacealinkedin.com"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className={`w-full border rounded-lg py-3 pl-11 pr-4 text-slate-950 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                formData.linkedin && !formData.linkedin.includes('.com')
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-blue-600 focus:border-transparent'
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
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
          <ChevronLeft className="w-4 h-4" />
          ANTERIOR
        </button>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
          SIGUIENTE
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
