import * as React from "react"
import Nav from "../components/nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col";
import styled from "styled-components"
import Socials from "../components/socials"
import Footer from "../components/footer";
import "@fontsource/roboto" 
import "@fontsource/roboto-mono"


export default function Home() {
  return (
    <Wrapper>
      <Container fluid className="x">
        <Row className="sticky-top" >
          <Col  >
            <Socials />
          </Col>
        </Row>
          <Row className="justify-content-center align-items-center"  style={{height: "90vh", marginTop:"-40px"}}>
              <Col lg > 
                  <h1 style={{textAlign:"center", marginBottom:"200px", fontSize:"8em"}}>Welcome ...</h1>
                  <h4 style={{textAlign:"center",  marginTop:"-90px", marginBottom:"90px"}}>I’m Jon, a self taught web Dev. Feel free to take a look at some of my projects. </h4>
                  <Nav /> 
              </Col> 
            </Row>
            <Row className="fixed-bottom text-center" >
            <Footer />
            </Row>
      </Container>
    </Wrapper>

  )
}

const Wrapper = styled.section`

  .x{
    background: linear-gradient(180deg, rgba(27,16,34,1) 18%, rgba(114,3,184,0.9780287114845938) 71%, rgba(48,19,69,1) 100%, rgba(157,0,255,0.9780287114845938) 100%);
    color: white;
    font-family: roboto-mono;
    height: 300vh;
  }

`