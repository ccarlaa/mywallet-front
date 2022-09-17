import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import RenderButton from "../Components/RenderButton";
import { WalletContext } from "../Contexts";

export default function Register() {
    const { signUp, setSignUp, signUpSuccess, postSignUp } = useContext(WalletContext);
    const { name, email, password, passwordConfirmed } = signUp;
    const [ disabled, setDisabled ] = useState(false);

    function OnSubmit(e) {
        setDisabled(true);
        postSignUp(signUp, e);
        setDisabled(false);
    }

    return (
        <Container>
            <Center>
                <Logo> MYWALLET </Logo>
                <Form onSubmit = {OnSubmit}>
                    <Input
                        disabled = {disabled}
                        type = "text"
                        value = {name}
                        placeholder = "Nome"
                        required
                        onChange = {(e) => setSignUp({...signUp, name: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "email"
                        value = {email}
                        placeholder = "Email"
                        required
                        onChange = {(e) => setSignUp({...signUp, email: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "password"
                        value = {password}
                        pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$_/*&@#])[0-9a-zA-Z$*&_/@#]{8,}"
                        title = "A senha deve conter 8 caracterestes sendo: 1 número, 1 caractere especial e 1 letra maiúscula"
                        placeholder = "Senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, password: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "password"
                        value = {passwordConfirmed}
                        pattern = {password}
                        title = "Digite senhas iguais"
                        placeholder = "Confime a senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, passwordConfirmed: e.target.value})}
                    />
                    <Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Entrar"/>
                    </Button>
                    <Link to = "/">
                        <GoTo>Primeira vez? Cadastre-se!</GoTo>
                    </Link>
                </Form >
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
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
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