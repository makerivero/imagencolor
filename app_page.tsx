import Image from "next/image"
import { UploadForm } from "./components/upload-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FF6B6B]/10 to-[#8C9EFF]/10">
      <header className="bg-[#FF6B6B] text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoinsta.jpg-4MEZGwNf0VtjgGeLWO7K4XVXd0aSPX.jpeg"
              alt="Imagen Color Logo"
              width={50}
              height={50}
              className="rounded-full bg-white p-1"
            />
            <h1 className="text-3xl font-bold">Imagen Color</h1>
          </div>
          <p className="hidden sm:block">Fotos impresas en 30 minutos</p>
        </div>
      </header>

      <section className="container mx-auto mt-8 p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FF6B6B]">¡Sube tus fotos y recógelas en 30 minutos!</h2>
            <p className="mb-4">Ofrecemos impresiones rápidas de alta calidad en varios tamaños:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="text-[#FF6B6B]">10x15 cm - Formato clásico</li>
              <li className="text-[#8C9EFF]">13x18 cm - Tamaño medio</li>
              <li className="text-[#FF6B6B]">15x21 cm - Formato grande</li>
              <li className="text-[#8C9EFF]">20x30 cm - Tamaño póster</li>
            </ul>
            <p className="mb-4 p-4 bg-[#FFD93D]/20 rounded-lg border border-[#FFD93D]">
              ¡Aprovecha nuestro servicio especial de fotos estilo Polaroid para tus vacaciones y eventos!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#8C9EFF]/20">
            <h3 className="text-xl font-semibold mb-4 text-[#FF6B6B]">Sube tus fotos aquí</h3>
            <UploadForm />
          </div>
        </div>
      </section>

      <footer className="bg-[#8C9EFF] text-white p-4 mt-8">
        <div className="container mx-auto">
          <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
          <div className="grid gap-2">
            <p>Dirección: Pringles 772, San Luis, Argentina</p>
            <p>Email: imagencolorsl@gmail.com</p>
            <p>WhatsApp: 2664339557</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

