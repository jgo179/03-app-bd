import type { User } from '@/core/model/usuario'
import user from '../../data/constants/user'
import LinhaUsuario from './LinhaUsuario'

export default function ListaUsuario() {
  return (
    <div className="flex flex-col gap-4">
      {user.map((user: User) => {
        return <LinhaUsuario key={user.id} usuario={user} />
      })}
    </div>
  )
}