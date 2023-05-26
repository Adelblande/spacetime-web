import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

interface Memory {
  id: string
  coverUrl: string
  excert: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  // console.log('toma essa caraia de token-->', token)

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  console.log('Adel-->', response)
  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div key={memory.id} className="space-y-4">
          <time className="-ml-8 flex items-center gap-2 text-sm before:h-px before:w-5 before:bg-gray-50">
            {Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'long',
            }).format(new Date(memory.createdAt))}
          </time>
          <Image
            src={memory.coverUrl}
            width={592}
            height={280}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
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
