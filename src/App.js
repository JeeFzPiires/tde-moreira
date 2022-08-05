import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen absolute" >
        <div className="bg-slate-700 rounded-xl md:flex md:p-0 mx-auto my-56 w-1/4 flex-col"> 
          <h1 className="text-center text-4xl text-blue-500 uppercase">Login</h1>
          <h6 className="pl-3 mt-8 text-white">Email:</h6>
          <Input placeholder="Coloque seu E-mail"/>
          <h6 className="pl-3 text-white">Senha:</h6>
          <Input placeholder="Coloque sua senha"/>
          <a href="#" className="pr-3 text-blue-600 text-right hover:underline">Esqueceu sua senha?</a>
          <a href="#" className="pr-3 mt-2 text-blue-600 text-right hover:underline">Cadastre-se</a>
          <Button />
        </div>
    </div>
  );
}

export default App;
