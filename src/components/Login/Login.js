import React, { useRef, useState } from 'react';
import companyLogo from '../../resources/images/vromon-xl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { setUser, errorMsg, setErrorMsg, login, googleLogin, createAccount } = useAuth();
    const [isLogin, setIsLogin] = useState(false);

    let history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from?.pathname || '/';

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // Toggling Method for Login or Signup 
    const togleLogin = e => {
        setIsLogin(e.target.checked);
    }

    // Method for Email-Password Signup
    const handleEmailPasswordRegister = e => {
        e.preventDefault();
        createAccount(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
        formRef.current.reset();
    }

    // Method for Email-Password Login
    const handleEmailPasswordLogin = e => {
        e.preventDefault();

        login(emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                setErrorMsg('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });

        formRef.current.reset();
    }

    // Method for Google Login
    const handleGoogleLogin = e => {
        e.preventDefault();

        googleLogin()
            .then((result) => {
                setUser(result.user);
                setErrorMsg('');

                // User Info Send to Database 
                const name = result.user.displayName;
                const email = result.user.email;
                const newUser = { name, email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                // Redirect Process
                history.push(redirect_uri);
            }).catch((error) => {
                setErrorMsg(error.message);
            });
    }

    return (
        <div>
            <div className="container container--mini my-5">
                {/* Company Logo  */}
                <img className="img-fluid mx-auto d-block mt-5" src={companyLogo} alt="" />

                {/* Welcome Message  */}
                <h2 className="my-3 fw-bold text-muted">Welcome User! <br /> Please {isLogin ? 'login to your account' : 'create an account'} </h2>

                {/* Login / Signup Form  */}
                <form className="d-flex justify-content-center" ref={formRef}>

                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Name Input  */}
                        {
                            isLogin ?
                                <div></div>
                                :
                                <div className="form-group text-start mx-5 mb-3">
                                    <label htmlFor="user_login">Name</label>
                                    <input type="text" className="form-control" ref={nameRef} placeholder="Your Name" required />
                                </div>
                        }

                        {/* Email Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_login">Email</label>
                            <input type="email" className="form-control" ref={emailRef} placeholder="Email Address" required />
                        </div>

                        {/* Password Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_pass">Password</label>
                            <input type="password" className="form-control" ref={passwordRef} placeholder="Enter Password" required />
                        </div>

                        {/* Error message  */}
                        <p className="login-remember text-start mx-5 mb-3">
                            <label><input type="checkbox" onChange={togleLogin} /> Already Registered?</label>
                        </p>

                        {/* Already Registered Check  */}
                        <p className="text-start text-danger mx-5 mb-3">
                            {errorMsg}
                        </p>

                        {/* Login / Signup Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick={isLogin ? handleEmailPasswordLogin : handleEmailPasswordRegister} type="submit" className="custom-btn w-100 mb-4">
                                {
                                    isLogin ? <FontAwesomeIcon icon={faSignInAlt} /> : <FontAwesomeIcon icon={faUserPlus} />
                                }
                                {isLogin ? ' Login' : ' Register'}
                            </button>
                        </div>

                        <p>----- OR -----</p>

                        {/* Google Login Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick={handleGoogleLogin} className="outline-btn-green py-2 w-100 mb-4">
                                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                            </button>
                        </div>

                    </div>

                </form>

            </div >

        </div >
    );
};

export default Login;