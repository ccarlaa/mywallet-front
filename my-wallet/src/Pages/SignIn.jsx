import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import styled from 'styled-components';
import RenderButton from "../Components/RenderButton";
import { WalletContext } from "../Contexts";

export default function Login() {
    const { infosLogin, setInfosLogin, signInSuccess, postSignIn, getRegisters, infosUser } = useContext(WalletContext);
    const { email, password } = infosLogin;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    function OnSubmit(e) {
        setDisabled(true);
        postSignIn(infosLogin, e);
        if(signInSuccess === true){
            getRegisters(infosUser.token)
            navigate('/registers');
        } else {
            setDisabled(false);
        }
    }

    return (
        <Container>
            <Center>
            <Logo> MYWALLET </Logo>
                <Form onSubmit={OnSubmit} >
                    <Input
                        disabled={disabled}
                        type="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={(e) => setInfosLogin({...infosLogin, email: e.target.value})}
                    />
                    <Input
                        disabled={disabled}
                        type="password"
                        value={password}
                        placeholder="senha"
                        pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$_/*&@#])[0-9a-zA-Z$*&_/@#]{8,}"
                        title = "A senha deve conter 8 caracterestes sendo: 1 número, 1 caractere especial e 1 letra maiúscula"
                        required
                        onChange={(e) => setInfosLogin({...infosLogin, password: e.target.value})}
                    />
                <Button disabled={disabled} type="submit">
                    <RenderButton state={disabled} text="Entrar"/>
                </Button>
                </Form >
                    <Link to="/sign-up">
                        <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                    </Link>
            </Center>
        </Container>
    )

}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    background: #8F53BF;
`
const Center = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: white;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: #A328D6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: white;
    cursor: pointer;

    &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`
const GoTo = styled.p`
    margin-top: 20px;
    color: white;
    text-decoration: none;
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

`