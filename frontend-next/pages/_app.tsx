import type { AppProps } from 'next/app'
import ReduxProvider from '@/components/common/ReduxProvider/ReduxProvider'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}
