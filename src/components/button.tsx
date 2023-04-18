import Link from "next/link";
import { Type } from "typescript";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  link: string;
};

const Button = ({ label, onClick, link }: ButtonProps) => {
  return (
    <Link href={link}>
      <button onClick={onClick} className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">
        {label}
      </button>
      </Link>
  );
};

type ButtonStructureProps = {
  label: string[];
  link: string[];
  gap: string;
};

const ButtonStructure: React.FC<ButtonStructureProps> = ({ label, link, gap }) => {
  return (
    <div className={"flex justify-evenly mt-3 "}>
      {/* <Button label={label[0]} link={link[0]}/>
      <Button label={label[1]} link={link[1]}/> */}
    </div>
  );
};

export { Button, ButtonStructure };