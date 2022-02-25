import { createContext, Dispatch, useContext } from 'react'
import { AccountAction, AccountState } from './useAccount'

export interface AccountContextValue {
  state?: AccountState,
  dispatch?: Dispatch<AccountAction>
}

export const AccountContext = createContext<AccountContextValue>({})

export const useAccountContext = () => useContext(AccountContext)
