import React, { useState } from 'react';
import styled from 'styled-components';



const steps = [
    "Learn React",
    "Apply for Job",
    "Earn Money"
]


const Container = styled.div`
  background-color: #FFFFFF;
  margin: 0 auto;
  height: 500px;
  width: 800px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center children vertically */
  position: absolute; /* Enable positioning */
  top: 50%; /* Move to the center of the viewport */
  left: 50%; /* Move to the center horizontally */
  transform: translate(-50%, -50%); /* Center align using transform */
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Add space between numbers */
  align-items: center;
  column-gap: 100px; /* Add horizontal spacing between numbers */
`;

const Number = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color:${({ isActive }) => (isActive ? '#2F3C7E' : '#89ABE3')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 32px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
`;

const Step = styled.h1`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
    color: black;
    margin: 50px auto;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 100px;
`

const Button = styled.button`
    height: 50px;
    width: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 22px;
    padding: 10px 10px;
    background-color:  #00246B;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

const Toggle = styled.button`
    height: 50px;
    width: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 22px;
    padding: 10px 10px;
    background-color:  #00246B;
    color: white;
    border-radius: 10px;
    border: none;
    margin-top: 50px;
    cursor: pointer;
`



const Steps = () => {
    const [CurrentStep, setCurrentStep] = useState(1);
    const [isOpen,SetIsOpen] = useState(true);

    const PreviousBtn =() =>{
        if(CurrentStep >1){
            setCurrentStep(CurrentStep - 1);
        }
            
    }
    
    const NextBtn =() =>{
        if(CurrentStep <3){
            setCurrentStep(CurrentStep + 1);
        }
    
    }
  
  
    return (

    <Container>
      {isOpen && 
      (<>
      <NumberContainer>
      <Number isActive={CurrentStep >= 1}>1</Number>
      <Number isActive={CurrentStep >= 2}>2</Number>
      <Number isActive={CurrentStep >= 3}>3</Number>

      </NumberContainer>
      <Step>Step {CurrentStep} : {steps[CurrentStep-1]}</Step>
      <BtnContainer>
      <Button onClick={PreviousBtn}>Previous</Button>
      <Button onClick={NextBtn}>Next</Button>

      </BtnContainer>
      </>)}
      <Toggle onClick={()=>SetIsOpen(!isOpen)}>
      {isOpen ? "Close" : "Open"}
      </Toggle>

    </Container>
  );
};

export default Steps;
