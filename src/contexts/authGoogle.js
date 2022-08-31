import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { createContext } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom"
import { get } from "lodash";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  
  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      if(sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };
    loadStoreAuth();
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(get(user,'providerData[0]'));
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  function signOut() {
    sessionStorage.clear();
    setUser(null)

    return <Navigate to="/"/>
  }

  return(
    <AuthGoogleContext.Provider
      value={{ signInGoogle, signed: !!user, user, signOut }}
      >
        {children}
    </AuthGoogleContext.Provider>
  )
};