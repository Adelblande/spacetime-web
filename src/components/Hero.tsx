import Image from 'next/image'
import logo from '../assets/logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="max-w-[520px] space-y-5">
      <Image src={logo} alt="Logo da spacetime" />
      <div className="space-y-2">
        <h1 className="font-sans text-5xl font-bold text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="font-sans text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
        <Link
          href="/memories/new"
          className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt font-bold uppercase text-black hover:bg-green-600"
        >
          CADASTRAR LEMBRANÇA
        </Link>
      </div>
    </div>
  )
}
