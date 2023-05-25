import { User } from 'lucide-react'

export function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-6 w-6 text-gray-500" />
      </div>
      <p className="w-[160px] text-sm leading-snug">
        <span className="underline hover:text-gray-50">Crie sua conta</span> e
        salve suas memórias!
      </p>
    </a>
  )
}