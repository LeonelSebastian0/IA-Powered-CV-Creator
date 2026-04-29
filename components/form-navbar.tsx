import Link from "next/link"

export function FormNavbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold">
              <span className="text-[#0f172a]">Creá Tu Propio </span>
              <span className="text-[#2563eb]">CV</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-[#0f172a] hover:text-[#2563eb] transition-colors text-sm font-semibold"
            >
              PLANTILLAS
            </Link>
            <Link
              href="#"
              className="text-[#0f172a] hover:text-[#2563eb] transition-colors text-sm font-semibold"
            >
              RECURSOS
            </Link>
            <Link
              href="#"
              className="text-[#0f172a] hover:text-[#2563eb] transition-colors text-sm font-semibold"
            >
              MI CUENTA
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Blue accent line */}
      <div className="h-1 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9]" />
    </header>
  )
}
