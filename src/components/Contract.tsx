import { FC } from 'react'
import { AccountActionType } from '../hooks/useAccount'
import { useAccountContext } from '../hooks/useAccountContext'

export const Contract: FC = () => {
  const { state: account, dispatch: accountDispatch } = useAccountContext()

  const handleChange = (event: any) => {
    accountDispatch?.({
      type: AccountActionType.UPDATE_NAME,
      value: event.target.value
    })
  }
  return (
    <div>
      <h1>Contratos</h1>
      <input onChange={handleChange}/>
      <p>El nombre de la cuenta es: {account?.accountName}</p>
    </div>
  )
}