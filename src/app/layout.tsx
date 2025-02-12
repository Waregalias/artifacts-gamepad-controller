import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import {Inter} from 'next/font/google'
import Modal from "@/app/components/Modal";
import './globals.css'

config.autoAddCss = false

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="en">
    <body className={inter.className}>
    <main className={'w-1/2 m-auto'}>
      <Modal>{children}</Modal>
    </main>
    </body>
    </html>
  )
}
