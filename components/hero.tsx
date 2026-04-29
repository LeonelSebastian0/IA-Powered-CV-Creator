import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight text-balance">
              Generá tu currículum como un pro
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Una plataforma moderna que transforma tu experiencia en un CV
              profesional con la ayuda de IA
            </p>
            <div className="pt-2">
              <Link
                href="/crear-cv"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
              >
                Empezá
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/robot-cv.jpg"
                alt="Robot amigable sosteniendo un CV"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
