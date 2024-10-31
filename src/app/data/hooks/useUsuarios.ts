import Backend from "@/backend"
import type { User } from "@/core/model/usuario"
import { useEffect, useState } from "react"

export default function useUsuarios() {
  const [usuarios, setUsuarios] = useState<User[]>([])
  const [usuario, setUsuario] = useState<Partial<User> | null>(null)

  useEffect(() => {
    Backend.usuarios.obter().then(setUsuarios)
  }, [])

  async function salvar() {
    if (!usuario) return
    await Backend.usuarios.salvar(usuario)

    const usuarios = await Backend.usuarios.obter()
    setUsuarios(usuarios)
    setUsuario(null)
  }

  async function excluir() {
    if (!usuario || !usuario.id) return
    await Backend.usuarios.excluir(usuario.id)

    const usuarios = await Backend.usuarios.obter()
    setUsuarios(usuarios)
    setUsuario(null)
  }

  return {
    usuario,
    usuarios,
    salvar,
    excluir,
    cancelar: () => setUsuario(null),
    alterarUsuario: (usuario: Partial<User> | null) => setUsuario(usuario)
  }
}