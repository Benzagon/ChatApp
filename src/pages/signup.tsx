import { ButtonStructure } from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";
import axios from "axios";

const signup: React.FC = () => {
    const buttonHandler = () => {
      axios.get("http://localhost:3001/users")
      .then(response => {
        console.log(response.data)
        document.getElementById("infoServer")!.innerHTML = JSON.stringify(response.data);
      })
      .catch(error => console.log(error));
    };


    return (
      <div className="flex bg-fixed min-h-screen bg-center bg-cover bg-no-repeat items-center bg-[url(../../public/blackDog.jpg)]">
        <div className="flex flex-col bg-slate-800 px-20 py-20 rounded-[30px] ml-32 mr-10">
          <Title title="Signup Page"/>
          <Subtitle subtitle="Nombre/s y Apellido/s"/>
          <input type="text" className="bg-slate-200 mb-2"></input>
          <Subtitle subtitle="Mail"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Contraseña"/>
          <input type="text" className="bg-slate-200 mb-3"></input>
          <Subtitle subtitle="Confirmar contraseña"/>
          <input type="text" className="bg-slate-200"></input>
          <ButtonStructure label={["Cancel", "Send"]} link={["/", "/main"]} gap="gap-3" ></ButtonStructure>
        </div>

        <div>
          <button onClick={buttonHandler} className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">Axios</button>
          <p id="infoServer">Aca va la info</p>
        </div>
      </div>
    );
  };
  
  export default signup;