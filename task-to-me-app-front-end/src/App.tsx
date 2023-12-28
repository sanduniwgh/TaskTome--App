import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useUserDispatcher } from "./context/UserContext.tsx";
import { Loader } from "./loader/Loader.tsx";
import { Header } from "./header/Header.tsx";
import { SignIn } from "./signin/SignIn.tsx";
import { auth } from "./firebase.ts";

function App() {
  const [loader, setLoader] = useState(true);
  const user= useRef();
  const userDispatcher = useUserDispatcher();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoader(false);
      if (user) {
        userDispatcher({type: 'sign-in', user});
      } else {
        userDispatcher({type: 'sign-out'});
      }
    });
    return () => unsubscribe();
  }, []);
  return (
      <>

        {loader ?   // if (loader)
            <Loader/>
            :           // else
            user ?  // if (user)
                (<>
                  <Header/>
                  <h1>Hello</h1>
                </>)
                :       // else
                <SignIn/>
        }
      </>
  )


}

export default App
