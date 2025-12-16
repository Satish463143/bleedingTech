"use client"
import { Provider } from 'react-redux'
import storeConfig from '@/src/config/store.config'

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={storeConfig}>{children}</Provider>
}
