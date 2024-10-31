'use server'

import { type User } from '@/core/model/usuario'
import Id from '@/core/utils/Id'
import RepositorioUsuario from './RepositorioUsuario'

export default async function salvarUsuario(usuario: Partial<User>) {
  const novoUser = {
    ...usuario,
    id: usuario.id ?? Id.novo
  }

  return RepositorioUsuario.salvar(novoUser as User)
}