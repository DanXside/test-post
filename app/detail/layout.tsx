import Header from '@/components/UI/header/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detail Post',
  description: 'Test app',
}

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Header />
        <main>
            {children}
        </main>
    </div>
  )
}