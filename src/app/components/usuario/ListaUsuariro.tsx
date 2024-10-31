import type { User } from '@/core/model/usuario'
import LinhaUsuario from './LinhaUsuario'

export interface ListaUsuarioProps {
  usuarios: User[]
  onClick?: (usuario: User) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.usuarios.map((user: User) => {
        return <LinhaUsuario key={user.id} usuario={user} onClick={props.onClick} />
      })}
    </div>
  )
}