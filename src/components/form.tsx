import Button from "./button";

type FormProps = {
  title: string;
};

const Form: React.FC<FormProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-[20px] items-center bg-white px-[25vw] py-[35vh] rounded-[30px]">
      <div>
        <h1 className="text-slate-800 text-4xl font-bold content-center text-center">Member Login</h1>
        <div className="bg-[#E5E5E5] p-2 rounded-[30px]">
          <h4 className="text-[#cacaca] text-xl">Email</h4>
        </div>
      </div>
      <Button label="Submit" link="/"></Button>
    </div>
  );
};

export default Form;
