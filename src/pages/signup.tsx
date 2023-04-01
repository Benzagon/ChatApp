import { ButtonStructure } from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";

const signup: React.FC = () => {
    return (
      <div className="flex bg-fixed min-h-screen bg-center bg-cover bg-no-repeat items-center bg-[url(../../public/blackDog.jpg)]">
        <div className="flex flex-col bg-slate-800 px-20 py-20 rounded-[30px] ml-32">
          <Title title="Signup Page"/>
          <Subtitle subtitle="Nombre/s y Apellido/s"/>
          <input type="text" className="bg-slate-200 mb-2"></input>
          <Subtitle subtitle="Mail"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Contraseña"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Confirmar contraseña"/>
          <input type="text" className="bg-slate-200"></input>
          <ButtonStructure label={["Cancel", "Send"]} link="/login" gap="gap-3" ></ButtonStructure>
        </div>
      </div>
    );
  };
  
  export default signup;