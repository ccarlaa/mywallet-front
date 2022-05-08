// import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WalletContext } from "../Contexts";
import Register from '../Components/Register';

export default function Registers() {
    let value = 0;
    const { infosUser, getRegisters, registerList } = useContext(WalletContext);
    const { name, token } = infosUser; 

    for(let i = 0; i < registerList.length; i++) {
        value += parseFloat(registerList[i].value);
    }

    return (
        <Container>
            <Center>
                <Header>
                    <h1>Olá, {name}</h1>
                    <IonIcon>
                        <ion-icon name="exit-outline"></ion-icon>
                    </IonIcon>
                </Header>
                <RegistersList>
                    <RegisterMargin justify = {registerList.length > 0 ? "flex-start" : "center"}>
                        <List>
                        {registerList.length > 0 ?
                            registerList.map((register) => {return (
                                <Register value={register.value} description={register.description} type={register.type} date={register.date}/>)}) : 
                            <NoRegisters>Não há registros deentrada ou saída </NoRegisters>
                        }
                        </List>
                        <Amount>
                            <h1>SALDO</h1>
                            <Value color = {value > 0 ? "#03AC00" : "#C70000"}>{value}</Value>
                        </Amount>
                    </RegisterMargin>
                </RegistersList>
                <OperationOptions>
                    <EntryOperation>
                        <IonIcon>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </IonIcon>
                        <h1>Nova entrada</h1>
                    </EntryOperation>
                    <ExitOperation>
                        <IonIcon>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </IonIcon>
                        <h1>Nova saída</h1>
                    </ExitOperation>
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
    background: #8F53BF;
`
const Center = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Header = styled.div`
    width: 100%;
    height: 15%;
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
    height: 100%;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
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
    height: 80%;
`
const OperationOptions = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const EntryOperation = styled.button`
    width: 50%;
    height: 80%;
    border-radius: 5px;
    border-style: none;
    background-color: #A328D6;
    padding: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: white;
`
const ExitOperation = styled.button`
    width: 50%;
    height: 80%;
    border-radius: 5px;
    border-style: none;
    background-color: #A328D6;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: white;
`
const IonIcon = styled.h1`
    font-size: 30px;
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