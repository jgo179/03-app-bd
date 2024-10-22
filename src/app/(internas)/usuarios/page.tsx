'use client'
import Pagina from "@/app/components/template/Pagina"
import Titulo from "@/app/components/template/Titulo"
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario"
import ListaUsuario from "@/app/components/usuario/ListaUsuariro"
import user from "@/app/data/constants/user"
import { User } from "@/core/model/usuario"
import { IconUser } from "@tabler/icons-react"
import { useState } from "react"

export default function Page() {
  const [usuario, setUsuario] = useState<User>(user[0])

  function salvar() {

  }

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icon={IconUser} principal="Usuários" secundario="Cadastro de usuários" />
      {/* <ListaUsuario /> */}
      <FormularioUsuario
        usuario={usuario}
        onChange={setUsuario}
        salvar={salvar}
        cancelar={() => { }}
      />
    </Pagina>
  )
}