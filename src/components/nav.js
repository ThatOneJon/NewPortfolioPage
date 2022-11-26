
import React from "react"
import { Link }from  "gatsby"
import Collapse from 'react-bootstrap/Collapse';
import styled from "styled-components"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data/data.json"
import {TbMessageDots} from "react-icons/Tb"


export default function Nav(){
    const [open, setOpen] = React.useState(true);
    const [openStack, setOpenStack] = React.useState(false);

    return(
      <Wrapper>
        <Container fluid >
          <Row lg={4} xs={1}  className="justify-content-center" >
            <Col className="text-center"  style={{paddingTop: "20px"}}>
              <h1 onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="example-collapse-text" > About <TbMessageDots/></h1>
            <Collapse in={open}>
              <div id="example-collapse-text" style={{marginTop:"30px"}}>
                  <h3>Name: <u>{data[0].name}</u></h3>
                  <h4>From: Germany -<u>{data[0].based}</u></h4>
                  <h4>Languages: <u>{data[0].languages}</u></h4>
                  <h4>Degree: <u>{data[0].degree}</u></h4>
                  {data[0].about}
              </div>
              </Collapse>
              </Col>
          <Col className="text-center mx-4"  style={{paddingTop: "20px"}}>
          <h1 onClick={() => setOpenStack(!openStack)} aria-expanded={openStack} aria-controls="example-collapse-text2" >Stack <TbMessageDots/> </h1>
            <Collapse in={openStack}>
              <div id="example-collapse-text2" style={{marginTop:"30px"}}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.                
              </div>
            </Collapse>
            </Col>
            <Col className="text-center"  as={Link} to="/" style={{paddingTop: "20px"}}><h1>Projects <TbMessageDots/> </h1></Col>
          </Row>
          </Container>
      </Wrapper>
      )
}

const Wrapper = styled.section`
  #example-collapse-text { 
    color: white;
    font-size: 1.4em;
    text-align: justify;
  }

  #example-collapse-text2{
    color: white;
    font-size: 1.4em;
    text-align: justify;
  }

  h1:hover{
    cursor: pointer;
    text-decoration: underline;
  }

`
