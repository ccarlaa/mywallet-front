import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from "./Style/GlobalStyle";
import { WalletContext } from "./Contexts";
import SignUp from "../src/Pages/SignUp";

export default function App() {
    return (
        <>
        <WalletContext>
            <GlobalStyle>
                <Routes>
                   <Route path = "\sign-up" element = {<SignUp />} />
                </Routes>
            </GlobalStyle>
        </WalletContext>
        </>
    )
}