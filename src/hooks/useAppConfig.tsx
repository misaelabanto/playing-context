import { createContext, useContext } from 'react'

export interface AppConfigContextValue {
  appName: string
}

const appConfig: AppConfigContextValue = {
  appName: 'Jugando con React Context'
}

export const AppConfigContext = createContext<AppConfigContextValue>(appConfig)

export const useAppConfig = () => {
  return useContext(AppConfigContext)
}
