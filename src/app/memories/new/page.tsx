import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { FormNewMemory } from '@/components/FormNewMemory'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-50"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>
      <FormNewMemory />
    </div>
  )
}
