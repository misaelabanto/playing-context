import { FC } from 'react'
import { useAppConfig } from '../hooks/useAppConfig'

export const Landing: FC = () => {
  const appConfig = useAppConfig()
  return (
    <div>
      <h1>Bienvenido a nuestra app: {appConfig.appName}</h1>
    </div>
  )
}