import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Homepage from '@/components/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Homepage />

    </>
  )
}
