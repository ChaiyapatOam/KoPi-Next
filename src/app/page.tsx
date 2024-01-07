import Link from "next/link"
import Home from "@/components/Home/Home"

export default function HomePage() {
  return (
    <div>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link href="/" className="underline font-bold">
          Kopi
        </Link>
      </p>
        <Home />
    </div>
  )
}
 