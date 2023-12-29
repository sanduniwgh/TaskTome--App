import './Header.css';
import{signOut} from 'firebase/auth';
import {auth} from "../firebase.ts";


export function Header() {

    function  handleSignOut(){
            signOut(auth)

    }
    return (
        <header className="P-2 border-bottom d-flex justify-content-between align-items-center ">
            <h3 className="m-0">TaskTome</h3>
            <button onClick={handleSignOut} className="btn btn-outline-primary btn-sm">
                sign out
            </button>
        </header>

    );
}