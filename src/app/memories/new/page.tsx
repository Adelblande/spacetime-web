import Link from 'next/link'
import { ChevronLeft, ImageIcon } from 'lucide-react'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-50"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>
      <form action="" className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="midia"
            className="flex cursor-pointer items-center gap-1.5 text-gray-200 hover:text-gray-100"
          >
            <ImageIcon width={22} height={22} />
            <input type="file" id="midia" className="invisible h-0 w-0" />
            Anexar mídia
          </label>
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:ring-0"
            />
            Tornar memória pública
          </label>
        </div>
        <textarea
          name="content"
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  )
}
