import styles from "./styles.module.css"

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
        <body>{children}</body>
      </html>
  )
}
export const dynamic = 'force-dynamic'