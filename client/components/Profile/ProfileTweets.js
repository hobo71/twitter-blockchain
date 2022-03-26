import Post from '../Post';
import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
 
  
  const tweets = [
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-03-023T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-01-04T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-02-04T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-03-14T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-06-13T12:01:00.000Z', // Sanity.io default storing style

    },
]

const ProfileTweets = () => {
    const { currentAccount, currentUser } = useContext(TwitterContext)
    /*const [tweets, setTweets] = useState<Tweets>([
      {
        timestamp: '',
        tweet: '',
      },
    ])*/

    return (
        <div className={style.wrapper}>
          {currentUser.tweets?.map((tweet, index) => (
            <Post
              key={index}
              displayName={
                author.name === 'Unnamed'
                  ? `${author.walletAddress.slice(
                      0,
                      4,
                    )}...${author.walletAddress.slice(-4)}`
                  : author.name
              }
              userName={`${author.walletAddress.slice(
                0,
                4,
              )}...${author.walletAddress.slice(-4)}`}
              text={tweet.text}
              avatar={author.profileImage}
              timestamp={tweet.timestamp}
              isProfileImageNFT={author.isProfileImageNFT}
            />
          ))}
        </div>
      )
}

export default ProfileTweets