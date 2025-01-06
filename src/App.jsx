import styled from "styled-components"
import Globlestyle from './styles/Globlestyle'
import Steps from "./Components/Steps"

const Container = styled.div`
  background-color: #FBEAEB;
  height: 100vh;
`

function App() {
  

  return (
    <>
      <Globlestyle/>
      <Container>
      <Steps/>
      </Container>
      
    </>
  )
}

export default App
