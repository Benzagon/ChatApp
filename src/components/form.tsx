// import Bu

type FormProps = {
    title: string;
};

const Form: React.FC<FormProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Form;