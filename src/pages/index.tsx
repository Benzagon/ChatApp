import Button from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";
import Dog from "../../public/dog.jpg"

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/dog.jpg')] bg-no-repeat bg-cover bg-center flex h-screen items-center justify-left">
        <div className="ml-96 flex flex-col gap-[10px] items-center bg-slate-800 px-20 py-20 rounded-[30px]">
          <Title title="Welcome!"/>
          <div className=" flex gap-2">
            <Button label="Login" link="/login"></Button>
            <Button label="Signup" link="/signup"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
