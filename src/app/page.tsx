import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Good Afternoon</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                alt="Capa do álbum"
                width={104}
                height={104}
              />
              <strong>Astronaut</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Made for Thiago Dias</h2>

          <div className="mt-4 grid grid-cols-8 gap-4">
            <a
              href=""
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.png"
                alt="Capa do álbum"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.png"
                alt="Capa do álbum"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.png"
                alt="Capa do álbum"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.png"
                alt="Capa do álbum"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.png"
                alt="Capa do álbum"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
