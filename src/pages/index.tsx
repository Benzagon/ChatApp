import { Button } from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";
import Dog from "../../public/dog.jpg"

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/dog.jpg')] bg-no-repeat bg-cover bg-center flex h-screen items-center justify-center">
        <div className="flex flex-col items-center bg-slate-800 px-20 py-20 rounded-[30px]">
          <Title title="Welcome!"/>
          <Subtitle subtitle="This is a chat app"/>
          <Subtitle subtitle="Please login or signup to continue"/>
          <div className="flex gap-2 mt-3">
            <Button label="Login" link="/login"></Button>
            <Button label="Signup" link="/signup"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
