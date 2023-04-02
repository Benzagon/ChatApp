type TitleProps = {
  title: string;
};

type SubtitleProps = {
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
      <h1 className="text-slate-100 text-3xl font-bold content-center text-center pb-5">
        {title}
      </h1>
  );
};

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h2 className="text-gray-400 w-max">
        {subtitle}
    </h2>
  );
};

export { Title, Subtitle };