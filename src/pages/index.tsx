import Button from "@/components/button";
import Title from "@/components/header-subheader"

export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center bg-slate-800 px-20 py-20 rounded-[30px]">
          <Title title="Hello World" subtitle="Please select an option for me" />
          <div className=" flex gap-2">
            <Button label="Login" link="/login"></Button>
            <Button label="Signup" link="/signup"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
