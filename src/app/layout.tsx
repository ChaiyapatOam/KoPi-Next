import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const IBM = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "KoPi",
  description: "Kopi Sharing Money",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IBM.className}>
        {children}
        <footer className="absolute bottom-0 pl-4">
          Built by{" "}
          <a
            href="https://ui.shadcn.com/"
            className="underline"
            target="_blank"
          >
            shadcn
          </a>
        </footer>
      </body>
    </html>
  )
}
