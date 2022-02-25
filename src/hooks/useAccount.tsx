import { useReducer } from 'react';

export interface AccountState {
  accountName: string
}

export enum AccountActionType {
  UPDATE_NAME = 'UPDATE_NAME'
}

export interface AccountAction {
  type: AccountActionType
  value: string
}

function accountReducer(state: AccountState, action: AccountAction): AccountState {
  switch(action.type) {
    case AccountActionType.UPDATE_NAME:
      return { 
        accountName: action.value
      }
    default:
      throw new Error('Unknown action type')
  }
}

export const useAccount = () => {
  return useReducer(accountReducer, { accountName: '' })
}
  