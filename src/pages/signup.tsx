import Button from "@/components/button";
import { Title } from "@/components/header-subheader";

const signup: React.FC = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center bg-slate-800 px-20 py-20 rounded-[30px]">
          <Title title="Signup Page"></Title>
          
          <input type="text" className="bg-slate-200"></input>
          <input type="text" className="bg-slate-200"></input>
          <div className="flex">
            <Button label="Cancel" link="/"></Button>
            <Button label="Send" link="/main"></Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default signup;