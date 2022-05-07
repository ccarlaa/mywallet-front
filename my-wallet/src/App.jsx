import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Style/GlobalStyle";
import { WalletProvider } from "./Contexts";
import SignUp from "../src/Pages/SignUp";
import SignIn from "../src/Pages/SignIn";

export default function App() {
    return (
        <>
        <WalletProvider>
            <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path = "/" element = {<SignIn />} />
                        <Route path = "/sign-up" element = {<SignUp />} />
                    </Routes>
                </BrowserRouter>
        </WalletProvider>
        </>
    )
}