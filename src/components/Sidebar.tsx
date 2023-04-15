import React from 'react';
import Image from 'next/image';

// const Sidebar = () => {
//     return(
//         <>
//             <div className="w-[27vw] h-screen bg-slate-200 left-0 p-10 grid">
//                 {/* User icon */}
//                 <div className='flex items-center gap-5'>
//                     <div className='aspect-square w-[7vw] overflow-clip rounded-full border-solid'>
//                         <Image src={profilePicture} alt="profile picture" width={300}/>
//                     </div>
//                     <div>
//                         <h2 className='font-sans font-bold text-xs text-blue-700 lg:text-2xl'>Mauricio Mauro</h2>
//                         <h3 className='font-sans text-xs text-slate-500 lg:text-lg'>Siempre terraza nunca sótano</h3>
//                     </div>
//                 </div>

//                 {/* Search Bar */}
//                 <input className='bg-slate-50 border border-slate-50 w-100 h-14 rounded-3xl p-4 focus:border-blue-500' placeholder='Search Friends'></input>
//             </div>
//         </>
//     )
// };

export type ChatProps = {
    name: string;
    lastMessage: string;
    profilePic: string;
}

const Chat: React.FC<ChatProps> = ({ name, lastMessage, profilePic }) => {
    return(
        <>
            <div className='aspect-square w-[25%] overflow-clip rounded-full border-solid'>
                <Image src={profilePic} alt="profilePic" height={200} width={200}/>
            </div>
            <div>
                <h2 className='font-sans font-bold text-xs text-blue-700 lg:text-sm'>{name}</h2>
                <h3 className='font-sans text-xs text-slate-500 lg:text-sm'>{lastMessage}</h3>
            </div>
        </>
    )
};

export default Chat;