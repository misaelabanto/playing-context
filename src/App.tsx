import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { AppConfigContext } from './hooks/useAppConfig'
import { AccountContext } from './hooks/useAccountContext'
import { Contract } from './components/Contract'
import { Details } from './components/Details';
import { useAccount } from './hooks/useAccount';

function App() {
  const [appConfig, setAppConfig] = useState({ appName: 'Hola Context World' })
  const [ accountState, accountDispatch ] = useAccount()

  useEffect(() => {
    setTimeout(() => {
      setAppConfig({ appName: 'ContextApp desde el servidor' })
    }, 5000)
  }, [])

  return (
    <div className="App">
      <AppConfigContext.Provider value={appConfig}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AccountContext.Provider value={{ state: accountState, dispatch: accountDispatch }}>
            <Landing />
            <Contract />
            <Details />
          </AccountContext.Provider>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppConfigContext.Provider>
    </div>
  );
}

export default App;
