import { useEffect, useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, getIdToken } from "firebase/auth";

// Firebase Initializaion Call 
initFirebaseAuth();

// Main useFirebase Function 
const useFirebase = () => {
    // All States 
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const auth = getAuth();

    // User State Tracking For Synchoronzation 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))

                setUser(user);
            }
        })
    }, [auth]);


    // Google Login Authentication 
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider);
    }

    // Create Account Process Using Email and Password 
    const createAccount = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMsg('');

                // Set Username (Update)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Update Successful 
                    logout();
                }).catch((err) => {
                    setErrorMsg(err.message);
                });

                // User Info Send to Database 
                const newUser = { name, email };
                fetch('https://secret-coast-24933.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('Your registration successfully completed. Please visit to login page.');
                        }
                    })
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    // Login Process Using Email and Password 
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout Process For All Login
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            setErrorMsg('');
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    // Data Sending 
    return {
        user,
        setUser,
        errorMsg,
        setErrorMsg,
        logout,
        login,
        createAccount,
        googleLogin
    };
};

export default useFirebase;