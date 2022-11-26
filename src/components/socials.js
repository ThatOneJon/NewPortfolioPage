import React from "react"
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { BsGithub, BsLinkedin } from "react-icons/Bs"
import {GoMailRead} from "react-icons/Go"
import styled from "styled-components"


export default function Socials(){
    return(
        <Wrapper>
        <Container fluid >
        <Row className="justify-content-end" style={{width:"100%"}}>
            <Col xs={2} lg={1} className="text-center "> <a href="https://github.com/ThatOneJon"> <h2><BsGithub /></h2> <p>GitHub</p> </a> </Col>
            <Col xs={2} lg={1} className="text-center "> <a href="https://www.linkedin.com/in/jon-stratenschulte-370736198/"><h2><BsLinkedin /></h2> <p>LinkedIn</p> </a></Col>
            <Col xs={2} lg={1} className="text-center "> <a href="#"> <h2><GoMailRead /></h2> <p>Mail</p> </a></Col>
        </Row>
        </Container>
        </Wrapper>

    )
}

const Wrapper = styled.section`
    h2{
        font-size: 3em;
        padding: 10px;
    }
    a{
        color: white;
    }
`
