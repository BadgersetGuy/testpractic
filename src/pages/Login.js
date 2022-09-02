import {
    Link
} from "react-router-dom";

const setLoggedIn = () => {
    localStorage.setItem("is_logged_in", true);
};

const Login = () => {
    return (
  
      <div className="text-3xl font-bold underline">
        <Link to="/form" onClick={setLoggedIn}>Log in</Link>
      </div>
  
    );
  }
  
export default Login;