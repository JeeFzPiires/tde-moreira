import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Navigate } from 'react-router-dom'

import LogoTI from '../../assets/LogoTI.png'

export default function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext); 

  function loginGoogle() {
    signInGoogle();
  }
  if ( !signed ) {
    return (
      <div className="items-center w-screen h-screen flex place-content-center">
        <div className="bg-slate-900 container h-full w-2/5 border-r-2 border-r-[#28edf5] items-center">
          <img src={LogoTI} className="flex mx-auto mt-44" />
          <h1 className="text-[#28edf5] text-center font-bold text-2xl font-mono ">GESTÃO DE TI</h1>
        </div>
        <div className="bg-slate-800 h-full w-3/4">
          <div className="bg-slate-900 w-2/5 h-72 rounded-xl border-2 border-[#28edf5] shadow-2xl mx-auto mt-56">
            <h1 className="text-white text-center mt-10 font-bold text-xl">Entre com a sua conta Google</h1>
            <div className="bg-[#28edf5] border-2 border-slate-900 text-slate-900 mt-14 h-16 w-72 flex-row mx-auto rounded-full cursor-pointer hover:shadow-sm hover:shadow-black hover:border-white
            "
            onClick={loginGoogle}
            >
              <h1 className="text-center font-bold">Entrar usando a conta Google</h1>
              <button className="mt-1 mx-32" onClick={loginGoogle}>
                <ion-icon size="large" name="logo-google"></ion-icon>
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  } else {
    return <Navigate to="/Home" />;
  }
}

