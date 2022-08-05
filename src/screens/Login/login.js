import { Button } from "./components/Button";
import { Input } from "./components/Input";

function Login() {
  return (
    <div className="p-32">
      <div className="bg-slate-300 p-20 mt-20 rounded-xl md:flex md:p-0  flex-col"> 
        <h1 className="text-center text-4xl text-blue-500 uppercase">Login</h1>
        <h6 className="pl-3 text-white">Email:</h6>
        <Input placeholder="Coloque seu E-mail"/>
        <h6 className="pl-3 text-white">Senha:</h6>
        <Input placeholder="Coloque sua senha"/>
        <Button />
      </div>
      
    </div>
  );
}

export default Login;
