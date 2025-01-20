"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function UploadForm() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [size, setSize] = useState("10x15")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [comments, setComments] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("size", size)
      formData.append("comments", comments)

      if (files) {
        Array.from(files).forEach((file) => {
          formData.append("files", file)
        })
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        alert("¡Fotos subidas con éxito! Te contactaremos cuando estén listas.")
        // Limpiar el formulario
        setName("")
        setEmail("")
        setPhone("")
        setComments("")
        setFiles(null)
      } else {
        throw new Error("Error al subir las fotos")
      }
    } catch (error) {
      alert("Hubo un error al procesar tu pedido. Por favor, intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-[#8C9EFF]/20 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
      </div>
      <div>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-[#8C9EFF]/20 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
      </div>
      <div>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border-[#8C9EFF]/20 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
      </div>
      <div>
        <Label htmlFor="photo-upload">Sube tus fotos</Label>
        <Input
          id="photo-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          required
          className="border-[#8C9EFF]/20 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
      </div>
      <div>
        <Label htmlFor="size-select">Selecciona el tamaño</Label>
        <Select onValueChange={setSize} defaultValue={size}>
          <SelectTrigger className="border-[#8C9EFF]/20">
            <SelectValue placeholder="Selecciona un tamaño" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10x15">10x15 cm</SelectItem>
            <SelectItem value="13x18">13x18 cm</SelectItem>
            <SelectItem value="15x21">15x21 cm</SelectItem>
            <SelectItem value="20x30">20x30 cm</SelectItem>
            <SelectItem value="polaroid">Estilo Polaroid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="comments">Comentarios adicionales</Label>
        <Textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="border-[#8C9EFF]/20 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90" disabled={loading}>
        {loading ? "Subiendo..." : "Subir fotos"}
      </Button>
    </form>
  )
}

