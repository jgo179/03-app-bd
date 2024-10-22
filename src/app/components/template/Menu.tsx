import { IconHome } from "@tabler/icons-react"
import Link from "next/link"

function MenuItem() {
  return (
    <Link href='/' className="flex gap-2 px-4 py-2 hover:bg-black">
      <IconHome />
      <span>Início</span>
    </Link>
  )
}

export default function Menu() {
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </nav>
    </aside>
  )
}  