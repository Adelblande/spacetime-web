import Image from 'next/image'
import { getUser } from '../lib/auth'

export function Profile() {
  const user = getUser()
  return (
    <div className="flex items-center gap-3">
      <Image
        className="rounded-full"
        src={user.avatarUrl}
        width={40}
        height={40}
        alt="Foto do perfil do usuário logado"
      />
      <p className="w-[160px] text-sm leading-snug">
        {user.name}
        <a
          href="/api/auth/logout"
          className="block text-purple-400 hover:text-purple-300"
        >
          Sair
        </a>
      </p>
    </div>
  )
}
