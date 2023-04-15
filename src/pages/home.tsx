import Chatbox from "@/components/Chatbox";
import { Chat } from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

const home = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => console.log(error));
    }, [])

    const allUsers = () => {
        return 
    }

    const searcher = (e: any) => {
        setSearch(e.target.value);
    }

    let results = []
    if(!search)
    {
        results = userData;
    }else{
            results = userData.filter((dato: any) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    return (
      
            <div className="flex">
                {/* Side Bar */}
                <div className="w-[30vw]  h-screen bg-slate-200 left-0 py-8">
                    {/* Search Bar */}
                    <div className="mb-5 flex">
                        <input onChange={searcher} className='bg-slate-50 border m-auto border-slate-50 w-100 h-14 rounded-3xl p-4 focus:border-blue-500' placeholder='Search Friends'></input>
                    </div>
                    {/* User chats */}
                    <div className='gap-5 flex-col overflow-y-auto max-h-[100%]'>
                        {/* <Chat name="Pedro" lastMessage="Algo del sotano y no se que" profilePic="/../public/man.jpg"></Chat> */}
                        {results.map((user: any) => {
                            return (
                                <Chat key={user.id} name={user.name} lastMessage={"Algo del sotano y no se que"} profilePic={"/../public/man.jpg"}></Chat>
                            )
                        })}
                    </div>
                </div>
                <Chatbox></Chatbox>
            </div>
       
    )
};

export default home;