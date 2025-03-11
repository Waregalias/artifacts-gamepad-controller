import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import {Inter} from 'next/font/google'
import {Toaster} from "@/components/ui/toaster";
import {ThemeProvider} from "@/components/ui/theme-provider";
import Modal from "@/app/components/Modal"
import './globals.css'

config.autoAddCss = false

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className={'w-1/2 m-auto'}>
        <Modal>{children}</Modal>
        <Toaster/>
      </main>
    </ThemeProvider>

    </body>
    </html>
  )
}
