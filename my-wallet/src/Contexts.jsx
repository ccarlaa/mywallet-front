import React, { createContext, useEffect, useState } from 'react';
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
        email: "", 
        password: "",
    });
    const [ signInSuccess, setSignInSuccess ] = useState(false)
    const [ infosUser, setInfosUser ] = useState()
    const [ registerList, setRegisterList ] = useState([])
    const [ newOperation, setNewOperation ] = useState({
        value: "",
        description: "",
        type: "",
    })
    const [ postOperationSuccess, setPostOperationSuccess ] = useState(false)
    const [ operationType, setOperationType ] = useState("")

    const postSignUp = (signUp, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/sign-up", signUp)
        .then(() => setSignUpSuccess(true))
        .catch((e) => window.confirm(e.response.data))
    }

    const postSignIn = (infosLogin, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/sign-in", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            setInfosUser(answer.data)
            getRegisters(answer.data.token);
            setSignInSuccess(true);
        })
        .catch((e) => window.confirm(e.response.data));
    }

    const getRegisters = (token) => {
        axios.get("http://localhost:5000/register", {headers: {'Authorization': `Bearer ${token}`}})
        .then((answer) => setRegisterList(answer.data))
        .catch((e) => window.confirm(e.response.data))
    }

    const postOperation = (newOperation, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register", newOperation, {headers: {'Authorization': `Bearer ${infosUser.token}`}})
        .then(() => {
            setPostOperationSuccess(true);
            getRegisters(infosUser.token);
            console.log("deu bom")
        })
        .catch((e) => window.confirm(e.response.data))
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
                getRegisters,
                infosUser,
                registerList,
                postOperation,
                newOperation,
                setNewOperation,
                postOperationSuccess,
                setOperationType,
                operationType
            }}
        >
            { children }
        </WalletContext.Provider>
    )
}

