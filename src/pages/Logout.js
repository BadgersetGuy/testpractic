import {
    Link
} from "react-router-dom";

const Logout = () => {
    
    const setLoggedIn = () => {
        localStorage.setItem("is_logged_in", false);
    };

    return (

      <div className="text-3xl font-bold grid justify-center p-48">
        <Link className="bg-slate-700 text-white p-2 pl-4 pr-4 rounded" to="/" onClick={setLoggedIn}>Log out</Link>
      </div>
  
    );
  }
  
  export default Logout;