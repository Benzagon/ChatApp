import { Chat } from "@/components/Sidebar";

const home = () => {
    return (
        <>
            {/* Side Bar */}
            <div className="w-[30vw] max-w-[20rem] h-screen bg-slate-200 left-0 py-8">
                {/* Search Bar */}
                <div className="mb-5 flex">
                    <input className='bg-slate-50 border m-auto border-slate-50 w-100 h-14 rounded-3xl p-4 focus:border-blue-500' placeholder='Search Friends'></input>
                </div>
                {/* User icons */}
                <div className='gap-5 flex'>
                    <Chat name="Pedro" lastMessage="Algo del sotano y no se que" profilePic="/../public/man.jpg"></Chat>
                </div>
            </div>

            
        </>
    )
};

export default home;