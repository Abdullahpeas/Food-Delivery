import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()

            .then(result => {
                history.push(redirect_uri)
                setUser(result.user)

            })
            .finally(() => setIsLoading(false))

    }
    return (
        <div className="section-login">
            <h2 className="text-success mt-5"> Please Login</h2>
            <button className="btn btn-warning" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;