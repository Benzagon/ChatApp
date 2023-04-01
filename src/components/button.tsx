import Link from "next/link";
import { Type } from "typescript";

type ButtonProps = {
  label: string;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link href={link}>
      <button className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">
        {label}
      </button>
    </Link>
  );
};

type ButtonStructureProps = {
  label: string[];
  link: string;
  gap: string;
};

const ButtonStructure: React.FC<ButtonStructureProps> = ({ label, link, gap }) => {
  return (
    <div className={"flex mt-3" +gap}>
      <Button label={label[0]} link={link}/>
      <Button label={label[1]} link={link}/>
    </div>
  );
};

export { Button, ButtonStructure };
