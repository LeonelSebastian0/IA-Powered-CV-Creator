export type ExperienciaItem = {
  id: string
  empresa: string
  periodo: string
  descripcion: string
}

export type FormData = {
  nombreCompleto: string
  apellidos: string
  correoElectronico: string
  telefono: string
  linkedin: string
  paisResidencia: string
  ciudad: string
  fotoUrl: string
  puesto: string
  empresa: string
  fechaInicio: string
  fechaFin: string
  institucion: string
  experiencias: ExperienciaItem[]
}
