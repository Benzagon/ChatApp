import Button from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";

const signup: React.FC = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <img src="C:\Users\47026639\Desktop\chatapp\src\components\external\fondo.mp4"></img>
        <div className="flex flex-col bg-slate-800 px-20 py-20 rounded-[30px]">
          <Title title="Signup Page"/>
          <Subtitle subtitle="Nombre/s y Apellido/s"/>
          <input type="text" className="bg-slate-200 mb-2"></input>
          <Subtitle subtitle="Mail"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Contraseña"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Confirmar contraseña"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <div className="flex gap-8">
            <Button label="Cancel" link="/"/>
            <Button label="Send" link="/main"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default signup;