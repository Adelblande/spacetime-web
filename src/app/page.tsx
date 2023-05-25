import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { cookies } from 'next/headers'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="relative flex flex-1 flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover p-6">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-50 blur-full" />

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>
      <div className="flex flex-1 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
