import * as React from "react"
import Nav from "../components/nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col";
import  Button  from "react-bootstrap/Button";
import styled from "styled-components"
import Socials from "../components/socials"
import Footer from "../components/footer";
//import Projects from "../components/projects"
import "@fontsource/roboto-mono"
import "@fontsource/nerko-one"
import Projects from "../components/projects";
import { BsFillArrowUpCircleFill }from "react-icons/Bs"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Fade from 'react-bootstrap/Fade';





export default function Home() {

  const[bottom,setBottom] = React.useState(false)
  React.useEffect( () => {
  document.addEventListener('scroll', () => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight && bottom === false) {
    setBottom(true)
  }else{
    setBottom(false)
  }
})
})

  return (
    <Wrapper>
      <Container fluid  className="x" >
        <Row className="fixed-top">
          <Col >
            <Socials />
          </Col>
        </Row>
          <Row className="justify-content-center align-items-center "  style={{  textShadow: "3px 3px black"}} >
              <Col  > 
                  <h1 style={{textAlign:"center", marginBottom:"180px", marginTop:"100px", fontSize:"calc(2em + 7vw)"}}>Welcome ...</h1>
                  <h4 style={{textAlign:"center",  marginTop:"-130px", marginBottom:"80px", fontSize:"2em"}}>I’m <u>Jon</u>, a self taught web Dev. Feel free to take a look at some of my projects. </h4>
                  <Nav /> 
              </Col> 
            </Row>
            <Row className="projectsRow ">
              <Col id="projects">
                <Projects />
              </Col>
            </Row>

              <Fade in ={bottom} timeout={600}>
                  <div>
                    <Row className="text-center justify-content-center mb-5" >
                        <Col> <h3>Currently looking for employment!</h3> </Col>
                      </Row>
                      <Row className="text-center justify-content-center" >
                        <Col><Button onClick={() => window.location.href="https://www.linkedin.com/in/jon-stratenschulte-370736198/"} style={{width:"30vw"}} variant = "dark" className="btn btn-lg p-3">Let's talk !</Button></Col>
                      </Row>
                      <Row className="text-center justify-content-center mt-5"  style={{fontWeight:"bold", fontSize:"2em", backgroundColor:"white"}}>
                        <Col> <div onClick={()=> (setBottom(false))}><AnchorLink  to="/"> Got back to the Top  <BsFillArrowUpCircleFill />  </AnchorLink> </div></Col>
                    </Row>
                  </div>
              </Fade>


            <Row className="mb-0 text-center footerRow" >
              <Col id="foot">
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
    overflow:hidden;
  }
  h1{
    font-family: "Nerko One", cursive;
  }
  .projectsRow{
    margin-top: 60vh;
    margin-bottom: 10vh;
  }

  .footerRow{
    margin-top: 35vh;
  }

`