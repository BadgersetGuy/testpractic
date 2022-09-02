import {
    Link
} from "react-router-dom";

const setLoggedIn = () => {
    localStorage.setItem("is_logged_in", true);
};

const Login = () => {
    return (
  
      <div className="text-3xl font-bold grid justify-center p-48">
        <Link className="bg-slate-700 text-white p-2 pl-4 pr-4 rounded" to="/form" onClick={setLoggedIn}>Log in</Link>
      </div>
  
    );
  }
  
export default Login;