import styled from 'styled-components';

export default function Register(infos) {
    return (
        <OneRegister>
            <Day>{infos.date}</Day>
            <Informations>
                <Description>{infos.description}</Description>
                <Value color={infos.type === "exit" ? "#C70000" : "#03AC00"}>R$ {infos.value}</Value>           
            </Informations>
        </OneRegister>
    )
}

const OneRegister = styled.div`
    width: 100%;
    min-height: 35px;
    display: flex;
    justify-content: space-between;
`
const Day = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #C6C6C6;
`
const Informations = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
`
const Description = styled.p`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`
const Value = styled.p`
    width: 100px;
    display: flex;
    justify-content: flex-end;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${props => props.color};
`