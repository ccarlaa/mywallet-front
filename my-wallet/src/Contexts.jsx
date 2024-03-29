import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
    const URL = process.env.REACT_APP_DATABASE_URL;
    const navigate = useNavigate();

    const [ signUp, setSignUp ] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: "",
    })
    const [ infosLogin, setInfosLogin ] = useState({
        email: "", 
        password: "",
    });
    const [ registerList, setRegisterList ] = useState([])
    const [ newOperation, setNewOperation ] = useState({
        value: "",
        description: "",
        type: "",
    })
    
    const postSignUp = (signUp, e) => {
        e.preventDefault();
        axios.post(`${URL}`+ "/sign-up", signUp)
        .then(() => navigate('/'))
        .catch((e) => window.confirm(e.response.data))
    }

    const postSignIn = (infosLogin, e) => {
        e.preventDefault();
        axios.post(`${URL}`+ "/sign-in", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            navigate("/registers")
        })
        .catch((e) => window.confirm(e.response.data));
    }

    const getRegisters = (token) => {
        axios.get(`${URL}`+ "/register", {headers: {'Authorization': `Bearer ${token}`}})
        .then((answer) => setRegisterList(answer.data))
        .catch((e) => window.confirm(e.response.data))
    }

    const postOperation = (newOperation, e, token) => {
        e.preventDefault();
        axios.post(`${URL}`+ "/register", newOperation, {headers: {'Authorization': `Bearer ${token}`}})
        .then(() => {
            navigate('/registers');
        })
        .catch((e) => window.confirm(e.response.data))
    }

    return (
        <WalletContext.Provider
            value = {{
                signUp,
                setSignUp,
                postSignUp,
                infosLogin,
                setInfosLogin,
                postSignIn,
                getRegisters,
                registerList,
                postOperation,
                newOperation,
                setNewOperation,
            }}
        >
            { children }
        </WalletContext.Provider>
    )
}

