import React, { createContext, useState } from 'react';
import axios from "axios";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
    const [ signUp, setSignUp ] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: "",
    })
    const [ signUpSuccess, setSignUpSuccess ] = useState(false);
    const [ infosLogin, setInfosLogin ] = useState({
        name: "", 
        token: ""
    });
    const [ signInSuccess, setSignInSuccess ] = useState(false)

    const postSignUp = (signUp, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/sign-up", signUp)
        .then(() => setSignUpSuccess(true))
        .catch((e) => window.confirm(e.response.data))
    }

    const postSignIn = (infosLogin, e) => {
        e.preventDefault();
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            setInfosLogin(answer.data);
            setSignInSuccess(true)
        })
        .catch((e) => window.confirm(e.response.data));
    }

    return (
        <WalletContext.Provider
            value = {{
                signUp,
                setSignUp,
                signUpSuccess,
                postSignUp,
                infosLogin,
                setInfosLogin,
                signInSuccess,
                postSignIn,
            }}
        >
            { children }
        </WalletContext.Provider>
    )
}

