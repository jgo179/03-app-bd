import type { User } from "@/core/model/usuario"
import Image from "next/image"

export interface LinhaUsuarioProps {
  usuario: User
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md">
      <Image
        src='https://github.com/jgo179.png'
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.usuario.name}</span>
        <span className="">{props.usuario.email}</span>
      </div>
    </div >
  )
}