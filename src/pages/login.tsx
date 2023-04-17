import { Title, Subtitle } from "@/components/header-subheader";

import { useState } from "react";
import axios from "axios";

const login: React.FC = () => {

  const loginHandler = (email: string, password: string) => {
    axios.post("http://localhost:3001/login", 
    {
      "email": email,
      "password": password
    })
    .then(res => {
      console.log(res.data);
      window.location.href = "/home";
    })
    .catch(error => console.error(error));
  };

  const [formData, setFormData] = useState({
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
    e.preventDefault()

    loginHandler(formData.email, formData.password)
  }


  return (
    <div className="flex bg-fixed min-h-screen bg-center bg-cover bg-no-repeat items-center bg-[url(../../public/brownDog.jpg)]">
      <div className="flex flex-col bg-slate-800 px-20 py-20 rounded-[30px] ml-32 mr-10">
        <Title title="Login Page" />
        <form onSubmit={submitForm} method="post">
          <div className="grid">
            <Subtitle subtitle="Email" />
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              className="bg-slate-200 mb-3"
            ></input>
            <Subtitle subtitle="Password" />
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
              className="bg-slate-200 mb-3"
            ></input>
            <button
              type="submit"
              className="text-slate-300 font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-800 transition duration-100"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
