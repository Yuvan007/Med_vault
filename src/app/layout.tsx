import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='flex flex-col bg-[rgb(244,232,232)] min-h-screen'>{children}</body>
    </html>
  )
}
