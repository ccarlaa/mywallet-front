import { Link, useNavigate } from "react-router-dom";
import {  useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WalletContext } from "../Contexts";
import Register from '../Components/Register';

export default function Registers() {
    let value = 0;
    const { getRegisters, registerList, setInfosLogin, setNewOperation } = useContext(WalletContext);
    const user =  localStorage.getItem('user');
    const token = JSON.parse(user).token;
    const name = JSON.parse(user).name;

    const navigate = useNavigate();

    for(let i = 0; i < registerList.length; i++) {
        if(registerList[i].type === "entry"){
            value += parseFloat(registerList[i].value)
        } else {
            value = value - parseFloat(registerList[i].value)
        }
    }

    value = value.toFixed(2)

    function CleanVariables() {
        setInfosLogin({
            email: "", 
            password: ""
        })

        localStorage.setItem("user", JSON.stringify({
            name: null,
            token: null,
        }));

        localStorage.setItem("type", JSON.stringify({
            type: null,
        }));

        navigate('/');
    }

    useEffect(() => {
        getRegisters(token);
        setNewOperation({
            value: "",
            description: "",
            type: "",
        });
    },[])

    function SetOperationType(operationType) {
        localStorage.setItem("type", JSON.stringify({
            type: operationType,
        }));
    }

    return (
        <Container>
            <Center>
                <Header>
                    <h1>Olá, {name}</h1>
                    <IonIcon onClick={() => CleanVariables()}>
                        <ion-icon name="exit-outline"></ion-icon>
                    </IonIcon>
                </Header>
                <RegistersList>
                    <RegisterMargin justify = {registerList.length > 0 ? "flex-start" : "center"}>
                        <List>
                        {registerList.length > 0 ?
                            registerList.map((register) => {
                                return (
                                    <Register 
                                        value={register.value.replace(".", ",")} 
                                        description={register.description} 
                                        type={register.type} 
                                        date={register.date}
                                    />
                                )
                            }) : 
                                <NoRegisters>Não há registros de entrada ou saída </NoRegisters>
                        }
                        </List>
                        <Amount>
                            <h1>SALDO</h1>
                            <Value color = {value > 0 ? "#03AC00" : "#C70000"}>R$ {value.replace(".", ",")}</Value>
                        </Amount>
                    </RegisterMargin>
                </RegistersList>
                <OperationOptions>
                    <Operation onClick={() => {SetOperationType("entry"); navigate("/operation")}}>
                        <IonIcon>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </IonIcon>
                        <H1>Nova entrada</H1>
                    </Operation>
                    <Operation onClick={() => {SetOperationType("exit"); navigate("/operation")}}>
                        <IonIcon>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </IonIcon>
                        <H1>Nova saída</H1>
                    </Operation>
                </OperationOptions>
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
    background-color: #8F53BF;
`
const Center = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width: 100%;
    min-height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
`
const RegistersList = styled.div`
    width: 100%;
    height: 73%;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RegisterMargin = styled.div`
    width: 90%;
    height: 95%;
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`
const List = styled.div`
    width: 100%;
    height: 95%;
    overflow: scroll;
`
const OperationOptions = styled.div`
    width: 90%;
    height: 18%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const H1 = styled.h1`
    width: 125px;
    text-align: left;
    padding-top: 20px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: white;
`
const Operation = styled.div`
    width: 48%;
    border-radius: 5px;
    border-style: none;
    background-color: #A328D6;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
`
const IonIcon = styled.h1`
    font-size: 30px;
    color: white
`
const NoRegisters = styled.h2`
    color: #868686;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
`
const Amount = styled.div`
    width: 100%;
    height: 35px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const Value = styled.p`
    text-align: right;
    color: ${props => props.color};
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;


`