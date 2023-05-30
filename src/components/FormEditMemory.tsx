'use client'

import { FormEvent, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ImageIcon } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

interface FormEditMemoryProps {
  id: string
}

interface DetailsProps {
  id: string
  content: string
  isPublic: boolean
  coverUrl: string
  typeMedia: string
  userId: string
  createdAt: string
}

export function FormEditMemory({ id }: FormEditMemoryProps) {
  const router = useRouter()
  const token = Cookies.get('token')
  const [details, setDetails] = useState<DetailsProps>({} as DetailsProps)

  async function handleSaveMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get('coverUrl')
    let coverUrl = ''
    let typeMedia = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileUrl
      typeMedia = uploadResponse.data.typeMedia
    }

    await api.post(
      '/memories',
      {
        coverUrl,
        typeMedia,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  async function fetchDetails() {
    const response = await api.get(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setDetails(response.data)
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <form onSubmit={handleSaveMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="midia"
          className="flex cursor-pointer items-center gap-1.5 text-gray-200 hover:text-gray-100"
        >
          <ImageIcon width={22} height={22} />
          Anexar mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            checked={details.isPublic}
            onChange={() =>
              setDetails({ ...details, isPublic: !details.isPublic })
            }
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:ring-0"
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        value={details.content}
        onChange={(event) =>
          setDetails({ ...details, content: event.target.value })
        }
      />
      <button
        type="submit"
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt font-bold uppercase text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}
