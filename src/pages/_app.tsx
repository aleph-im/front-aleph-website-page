import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from '@aleph-front/core'

import Footer from '@/components/Footer'
import { GlobalStylesOverride } from '@/styles/global'
import Header from '@/components/Header'
import NotificationProvider from '@/components/NotificationProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.aleph}>
      <GlobalStyles />
      <GlobalStylesOverride />
      <NotificationProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </NotificationProvider>
    </ThemeProvider>
  )
}
