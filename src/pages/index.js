import * as React from "react"
import Nav from "../components/nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col";
import styled from "styled-components"
import Socials from "../components/socials"
import Footer from "../components/footer";
import Projects from "../components/projects"
import "@fontsource/roboto-mono"
import "@fontsource/nerko-one"



export default function Home() {
  const[scroll, setScroll] = React.useState(false)


  return (
    <Wrapper>
      <Container fluid  className="x" >
        <Row className="fixed-top">
          <Col >
            <Socials />
          </Col>
        </Row>
          <Row className="justify-content-center align-items-center"  style={{height: "90vh", marginTop:"-60px"}} >
              <Col  > 
                  <h1 style={{textAlign:"center", marginBottom:"180px", fontSize:"calc(2em + 8vw)"}}>Welcome ...</h1>
                  <h4 style={{textAlign:"center",  marginTop:"-130px", marginBottom:"80px", fontSize:"2em"}}>I’m <u>Jon</u>, a self taught web Dev. Feel free to take a look at some of my projects. </h4>
                  <Nav /> 
              </Col> 
            </Row>
            <Row className="fixed-bottom text-center" >
              <Col lg>
                  <Footer />
              </Col>
            </Row>
      </Container>
    </Wrapper>

  )
}

const Wrapper = styled.section`

  .x{
    background: linear-gradient(180deg, rgba(27,16,34,1) 18%, rgba(114,3,184,0.9780287114845938) 71%, rgba(48,19,69,1) 100%, rgba(157,0,255,0.9780287114845938) 100%);
    color: white;
    font-family: "Roboto Mono", monospace;
    height: 300vh;
    overflow:hidden;
  }
  h1{
    font-family: "Nerko One", cursive;
  }

`