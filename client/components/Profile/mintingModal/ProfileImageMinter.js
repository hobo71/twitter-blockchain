import { useState, useContext } from 'react'
import { TwitterContext } from '../../../context/TwitterContext'
import { useRouter } from 'next/router'

const ProfileImageMinter = () => {
  //const { currentAccount, setAppStatus } = useContext(TwitterContext)
  const [status, setStatus] = useState('initial')
  //const router = useRouter()

  const modalChildren = (modalStatus = status) => {
    switch(key) {
      case 'initial':
        break;
      default:
        break;  
    }
  }
 


  return (
    <>{modalChildren(status)}</>
  )
}

export default ProfileImageMinter