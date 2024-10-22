

import type { User } from "@/core/model/usuario"
import InputTexto from "../shared/InputTexto"

export interface FormularioUsuarioProps {
  usuario: User
  onChange: (usuario: User) => void
  salvar: () => void
  cancelar: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputTexto
        label="Nome"
        type="text"
        value={props.usuario.name}
        onChange={(e) => {
          props.onChange?.({ ...props.usuario, name: e.target.value })
        }}
      />
      <InputTexto
        label="E-mail"
        type="email"
        value={props.usuario.email}
        onChange={(e) => {
          props.onChange?.({ ...props.usuario, email: e.target.value })
        }}
      />
      <InputTexto
        label="Senha"
        type="password"
        value={props.usuario.password}
        onChange={(e) => {
          props.onChange?.({ ...props.usuario, password: e.target.value })
        }}
      />

      <div className="flex gap-5">
        <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.salvar}>
          Salvar
        </button>
        <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  )
}