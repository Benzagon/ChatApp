import Image from "next/image";
import { Button } from "./button";

type ChatProps = {
    name: string;
    onClick?: () => void;
};

const Homepage = () => {
    return (
        <a className="block max-w-sm p-6 bg-green-400 border border-gray-200 rounded-lg shadow hover:bg-gray-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Elige una conversación!</h5>
        </a>
    );
};

const Chatbox = ({name, onClick}: ChatProps) => {
    return (
        <div className="w-full h-screen bg-slate-100">
            {/* Header */}
            <div className="bg-slate-300 min-w-full h-24 flex gap-3 items-center">
                <div className='h-[85%] aspect-square overflow-clip rounded-full border-solid relative ml-10'>
                    <Image src={"/../public/man.jpg"} alt="profilePic" fill/>
                </div>
                <h1 className="font-sans font-bold text-lg text-blue-700 lg:text-xl">{name}</h1>
            </div>

            {/* Chat */}
            <div className="grid p-10">
                <input type="text" />
                <Button label="Send" onClick={onClick} link=""></Button>
            </div>
        </div>
    );
};

export { Chatbox, Homepage }; 