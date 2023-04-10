import { ButtonStructure } from "@/components/button";
import { Title, Subtitle } from "@/components/header-subheader";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const signup: React.FC = () => {
    const buttonHandler = () => {
      axios.get("http://localhost:3001/users")
      .then(response => {
        console.log(response.data)
        document.getElementById("infoServer")!.innerHTML = JSON.stringify(response.data);
      })
      .catch(error => console.log(error));
    };

    const signupHandler = (name: string, email: string, password: string) => {
      axios.post("http://localhost:3001/signup", 
      {
        "name": name,
        "email": email,
        "password": password
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
    };

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    });

    const handleInput = (e: any) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
    
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue
      }));
    }

    const submitForm = (e: any) => {
      // We don't want the page to refresh
      // e.preventDefault()

      signupHandler(formData.name, formData.email, formData.password)
      setFormData({ 
        name: "", 
        email: "", 
        password: "" 
      })
    }

    return (
      <div className="flex bg-fixed min-h-screen bg-center bg-cover bg-no-repeat items-center bg-[url(../../public/blackDog.jpg)]">
        <div className="flex flex-col bg-slate-800 px-20 py-20 rounded-[30px] ml-32 mr-10">
          <Title title="Signup Page"/>
          <form onSubmit={submitForm} method="post">
            <div className="grid">
              <Subtitle subtitle="Name"/>
              <input type="text" onChange={handleInput} id="name" name="name" className="bg-slate-200 mb-2"></input>
              <Subtitle subtitle="Email"/>
              <input type="email" onChange={handleInput} id="email" name="email" className="bg-slate-200 mb-3"></input>
              <Subtitle subtitle="Password"/>
              <input type="password" onChange={handleInput} id="password" name="password" className="bg-slate-200 mb-3"></input>
              <button type="submit" className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">Submit</button>
              {/* <Subtitle subtitle="Confirmar contraseña"/>
              <input type="text" className="bg-slate-200"></input> */}
            </div>
          </form>
          {/* <ButtonStructure label={["Cancel", "Send"]} link={["/", "/main"]} gap="gap-3" ></ButtonStructure> */}
        </div>

        <div>
          <button onClick={buttonHandler} className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">Axios</button>
          <p id="infoServer">Aca va la info</p>
          
          <button onClick={(e) => signupHandler("gonza", "pedro@gmail.com", "123")} className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100">Create User</button>
        </div>
      </div>
    );
  };
  
  export default signup;