import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'WikiGo!!',
  description: 'Made With ❤',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800" style={{ backgroundColor: '#84cc16' }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
