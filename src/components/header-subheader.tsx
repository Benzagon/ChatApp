type TitleProps = {
  title: string;
  subtitle: string;
};

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="">
      <h1 className="text-slate-100 text-3xl font-bold content-center text-center">
        {title}
      </h1>
      <h2 className="text-gray-400 w-max">
          {subtitle}
      </h2>
    </div>
  );
};

export default Title;
