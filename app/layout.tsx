import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scassa Direito - Educação Jurídica Inteligente',
  description: 'Plataforma de educação jurídica com IA - Juan Scassa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-scassa-gray">{children}</body>
    </html>
  )
}
