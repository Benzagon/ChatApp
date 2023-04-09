import profilePicture from '../../public/man.jpg'
import Image from 'next/image';

const Sidebar = () => {
    return(
        <>
            <div className="w-[27vw] h-screen bg-slate-200 left-0 p-10 grid">
                {/* User icon */}
                <div className='flex items-center gap-5'>
                    <div className='aspect-square w-[7vw] overflow-clip rounded-full border-solid'>
                        <Image src={profilePicture} alt="profile picture" width={300}/>
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-2xl text-blue-700'>Mauricio Mauro</h2>
                        <h3 className='font-sans text-lg text-slate-500'>Siempre terraza nunca sótano</h3>
                    </div>
                </div>

                {/* Search Bar */}
                <input className='bg-slate-50 border border-slate-50 w-100 h-14 rounded-3xl p-4 focus:border-blue-500' placeholder='Search Friends'></input>
            </div>
        </>
    )
};

export default Sidebar;