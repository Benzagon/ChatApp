import Form from "@/components/form";
import {Button} from "../components/button"

const login: React.FC = () => {
  return (
    <div className="flex bg-fixed min-h-screen bg-center bg-cover bg-no-repeat items-center bg-[url(../../public/brownDog.jpg)]">
      <h1>login</h1>
      <Button label="Cancel" link="/"></Button>
    </div>
  );
};

export default login;
