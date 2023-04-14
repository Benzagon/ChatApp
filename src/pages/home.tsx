import { Chat } from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { MouseEvent } from "react";

const home = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState("");

    // get users from database
    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => console.log(error));
    }, [])

    // save value of search
    const searcher = (e: any) => {
        setSearch(e.target.value);
    }

    // filter users by search
    let results = []
    if(!search)
    {
        results = userData;
    }else{
            results = userData.filter((dato: any) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    // function to select chat
    const selectChat = (i: number) => (e: MouseEvent<HTMLElement>) => {
        const info = userData.filter((dato: any) => dato.id === i);

    }

    return (
        <>
            <div className=" flex">
                {/* Side Bar */}
                <div className="w-fit bg-slate-200 left-0 h-[100vh]">
                    {/* Search Bar */}
                    <div className="flex my-5">
                        <input onChange={searcher} className='bg-slate-50 border m-auto border-slate-50 w-100 h-14 rounded-3xl p-4 focus:border-blue-500' placeholder='Search Friends'></input>
                    </div>
                    {/* User chats */}
                    <div className='flex-col overflow-y-auto h-[calc(100vh-96px)]'> 
                        {results.map((user: any) => {
                            return (
                                <button onClick={selectChat(user.id)} key={user.id} className='flex text-left items-center m-auto mb-3 gap-5 w-[80%] hover:bg-slate-300 active:bg-slate-400 rounded'>
                                    <Chat name={user.name} lastMessage={"Algo del sotano y no se que"} profilePic={"/../public/man.jpg"}></Chat>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Chat */}
                <div className="h-[100vh] w-[100vw] bg-[url(../../public/home.jpg)] bg-cover">

                </div>
            </div>
        </>
    )
};

export default home;