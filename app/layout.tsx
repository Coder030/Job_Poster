import styles from "./styles.module.css"
import Navbar from "./Navbar"

export const metadata = {
  title: 'Job Poster'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = {}
  return (
      <html lang="en">
        <body>
          <Navbar/>
          {children}
        </body>
      </html>
  )
}
export const dynamic = 'force-dynamic'