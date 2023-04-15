import Image from "next/image";

type ChatProps = {
    name: any;
};

const Chatbox: React.FC<ChatProps> = ({name}) => {
    return (
        <div className="w-full h-screen bg-slate-100">
            <div className="bg-slate-200 min-w-full h-32 p-10">
                <div className='h-[90%] w-[100px] py-auto overflow-clip rounded-full border-solid relative'>
                    <Image src={"/../public/man.jpg"} alt="profilePic" fill/>
                </div>
                <h1 className="font-sans font-bold text-xs text-blue-700 lg:text-sm">{name}</h1>
            </div>
            <div className="grid p-10">
                <div>
                    <h1>Hola</h1>
                    </div>
                <input type="text" />
            </div>
        </div>
    );
};

export default Chatbox; 