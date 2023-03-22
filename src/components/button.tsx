import Link from "next/link";

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

export default Button;
