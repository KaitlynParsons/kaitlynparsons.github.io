import { useAuth0 } from "@auth0/auth0-react";
import User from "./../../../assets/actions/user.svg";
import "./Login.scss"

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return <img className="user-profile" onClick={() => loginWithRedirect()} src={User} alt="user" />;
}

export default Login;