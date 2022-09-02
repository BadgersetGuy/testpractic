import {
    Link
} from "react-router-dom";

const Logout = () => {
    
    const setLoggedIn = () => {
        localStorage.setItem("is_logged_in", false);
    };

    return (

      <div className="text-3xl font-bold underline">
        <Link to="/" onClick={setLoggedIn}>Log out</Link>
      </div>
  
    );
  }
  
  export default Logout;