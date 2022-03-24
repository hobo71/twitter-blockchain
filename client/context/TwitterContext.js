import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//import { client } from '../lib/client'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  //const [currentUser, setCurrentUser] = useState({})
  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])


  /* Checks if there is an active wallet connection*/
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])

        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }

  /**
   * Initiates MetaMask wallet connection
   */
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }


    return (
        <TwitterContext.Provider
          value={{
            appStatus,
            currentAccount,
            connectWallet,
          }}
        >
          {children}
        </TwitterContext.Provider>
      )
    }