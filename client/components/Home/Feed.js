import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `stcky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
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
function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNFT={tweet.isProfileImageNFT}
                    timestamp={tweet.timestamp}
                
                /> //post is its own component
            ))}
        </div>
    )
}

export default Feed