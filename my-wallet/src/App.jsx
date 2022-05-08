import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Style/GlobalStyle";
import { WalletProvider } from "./Contexts";
import SignUp from "../src/Pages/SignUp";
import SignIn from "../src/Pages/SignIn";
import Registers from "../src/Pages/Registers";

export default function App() {
    return (
        <>
        <WalletProvider>
            <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path = "/" element = {<SignIn />} />
                        <Route path = "/sign-up" element = {<SignUp />} />
                        <Route path = "/registers" element = {<Registers />} />
                    </Routes>
                </BrowserRouter>
        </WalletProvider>
        </>
    )
}