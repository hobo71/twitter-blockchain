import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'react/router';

export const TwitterContext = createContext()
export const TwitterProvider = ({ children }) => {
   const [appStatus, setAppStatus] = useState('loading')
   const [currentAccount, setCurrentAccount] = useState('')
   const router = useRouter()

   useEffect(()=> {
       checkIfwalletIsConnected()
   }, [])
   
    const checkIfwalletIsConnected = async () => {
        if (!window.ethereum) return
        try{
            const addressArray = await window.etherium.request({
                method: 'eth_account',
            })
            if (addressArray.length > 0) {
                //connected
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            } else {
                //not connected send to home page
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            console.log(error)
        }
    }

    /*Initiates MetaMask wallet connection*/
    const connectToWallet = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try {
            setAppStatus('loading')

            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccount',
            })
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
            }else {
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            setAppStatus('error')
        }
    }

    return(
        <TwitterContext.Provider value={{ appStatus, currentAccount,  connectWallet }} >
            {children}
        </TwitterContext.Provider>
    )
}