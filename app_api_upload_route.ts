import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const size = formData.get("size") as string

    // Crear un directorio para el pedido
    const orderDir = path.join(process.cwd(), "uploads", Date.now().toString())
    await writeFile(path.join(orderDir, "order.json"), JSON.stringify({ name, email, phone, size }))

    // Guardar las fotos
    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      await writeFile(path.join(orderDir, file.name), buffer)
    }

    // Aquí podrías enviar un email de confirmación

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error al procesar el pedido" }, { status: 500 })
  }
}

