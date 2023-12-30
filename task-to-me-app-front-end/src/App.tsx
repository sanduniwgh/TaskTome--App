import './App.css'
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase.ts";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {SignIn} from "./signin/SignIn.tsx";
import {Loader} from "./loader/Loader.tsx";
import {Header} from "./header/Header.tsx";
import {Form} from "./form/Form.tsx";
import {TaskProvider, useTaskDispatcher} from "./context/TaskContext.tsx";
import {TaskList} from "./task-list/TaskList.tsx";

function App() {

  const [loader, setLoader] = useState(true);
  const user = useUser();
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
                  <TaskProvider>
                    <Form/>
                    <TaskList/>
                  </TaskProvider>
                </>)
                :       // else
                <SignIn/>
        }
      </>
  )
}

export default App