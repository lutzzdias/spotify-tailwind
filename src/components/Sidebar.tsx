import {
  Home as HomeIcon,
  Search as SearchIcon,
  Library as LibraryIcon,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <SearchIcon />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <LibraryIcon />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          FunkHits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Os Arrais
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          A Nova Cena: Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Mix: chill
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Sertanejo VIP
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Mix: favoritas
        </a>
      </nav>
    </aside>
  )
}
