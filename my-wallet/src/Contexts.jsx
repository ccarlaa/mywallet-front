import React, { createContext, useState } from 'react';
import axios from "axios";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: "",
    })
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const postSignUp = (signUp) => {
        axios.post("http://localhost:5000/sign-up", signUp)
        .then(() => {setSignUpSuccess(true); console.log("db")})
        .cacth((e) => console.log("Erro: " + e))
    }

    return (
        <WalletContext.Provider
            value = {{
                signUp,
                setSignUp,
                signUpSuccess,
                postSignUp,
            }}
        >
            { children }
        </WalletContext.Provider>
    )
}

