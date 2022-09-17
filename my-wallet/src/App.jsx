import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Style/GlobalStyle";
import { WalletProvider } from "./Contexts";
import SignUp from "../src/Pages/SignUp";
import SignIn from "../src/Pages/SignIn";
import Registers from "../src/Pages/Registers";
import Operation from "./Pages/Operation";

export default function App() {
    return (
        <>
            <GlobalStyle />
                <BrowserRouter>
                    <WalletProvider>
                        <Routes>
                            <Route path = "/" element = {<SignIn />} />
                            <Route path = "/sign-up" element = {<SignUp />} />
                            <Route path = "/registers" element = {<Registers />} />
                            <Route path = "/operation" element = {<Operation />} />
                        </Routes>
                    </WalletProvider>
                </BrowserRouter>
        </>
    )
}