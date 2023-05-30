import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { ArrowRight, Trash2, Edit2 } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

interface Memory {
  id: string
  coverUrl: string
  typeMedia: string
  excert: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div key={memory.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <time className="-ml-8 flex items-center gap-2 text-sm before:h-px before:w-5 before:bg-gray-50">
              {Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'long',
              }).format(new Date(memory.createdAt))}
            </time>
            <div className="flex gap-2">
              <Link href={`/memories/${memory.id}`}>
                <Edit2 className="h-4 w-4 cursor-pointer text-purple-600 hover:text-purple-700" />
              </Link>

              <Trash2 className="h-4 w-4 cursor-pointer text-purple-600 hover:text-purple-700" />
            </div>
          </div>
          {memory.typeMedia.includes('image/') && (
            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}
          {memory.typeMedia.includes('video/') && (
            <video
              src={memory.coverUrl}
              controls={false}
              muted
              autoPlay
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.excert}
          </p>
          <Link
            href={`/memories/details/${memory.id}`}
            className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            Ler mais
            <ArrowRight width={16} height={16} />
          </Link>
        </div>
      ))}
    </div>
  )
}
