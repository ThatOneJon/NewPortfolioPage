
import React from "react"
import Collapse from 'react-bootstrap/Collapse';
import styled from "styled-components"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data/data.json"
import {TbMessageDots} from "react-icons/Tb";
import {SiJavascript, SiCss3, SiBootstrap, SiTypescript, SiDjango, SiMysql} from "react-icons/Si"
import {FaHtml5} from "react-icons/Fa"
import {GrReactjs} from "react-icons/Gr"
import {IoLogoPython} from "react-icons/Io"
import {BsGithub} from "react-icons/Bs"
import {GrGatsbyjs} from "react-icons/Gr"
import { AnchorLink } from "gatsby-plugin-anchor-links"


export default function Nav(){
    const [open, setOpen] = React.useState(true);
    const [openStack, setOpenStack] = React.useState(false);

    return(
      <Wrapper>
        <Container fluid >
          <Row lg={4} xs={1}  className="justify-content-center" >
            <Col className="text-center"  style={{paddingTop: "20px"}}>
              <h1 onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="example-collapse-text" style={open ? {textDecoration:"underline"} : null}> About <TbMessageDots/></h1>
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
          <h1 onClick={() => setOpenStack(!openStack)} aria-expanded={openStack} aria-controls="example-collapse-text2" style={openStack ? {textDecoration:"underline"} : null} >Stack <TbMessageDots/> </h1>
            <Collapse in={openStack}>
              <div id="example-collapse-text2" style={{marginTop:"30px", textAlign:"center"}}>
                <h3>Frontend</h3>
                <ul >
                  <li style={{padding:"5px", textAlign:"start", background: "linear-gradient(90deg, rgba(0,0,0,1) 79%, rgba(255,255,255,1) 79%)", border:"4px solid white"}}><FaHtml5 /> HTML</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 79%, rgba(255,255,255,1) 79%)"}}><SiCss3 /> CSS</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 56%, rgba(255,255,255,1) 56%)", boxshadow:"2px 2px black"}}><SiJavascript /> Javascript</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 53%, rgba(255,255,255,1) 53%)"}}> <GrReactjs /> React</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 52%, rgba(255,255,255,1) 52%)"}}> <SiBootstrap /> Bootstrap</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 23%, rgba(255,255,255,1) 23%)"}}> <SiTypescript/> Typescript</li>
                  <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white",background: "linear-gradient(90deg, rgba(0,0,0,1) 38%, rgba(255,255,255,1) 38%)"}}> <GrGatsbyjs/> Gatsby</li>

                </ul>
                <h3>Backend</h3>
                <ul>
                <li style={{padding:"5px", textAlign:"start", border:"4px solid white", background:"linear-gradient(90deg, rgba(0,0,0,1) 69%, rgba(255,255,255,1) 69%)"}}><IoLogoPython /> Python</li>
                <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white", background:"linear-gradient(90deg, rgba(0,0,0,1) 63%, rgba(255,255,255,1) 63%)"}}> <SiDjango/> Django</li>
                <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white", background:"linear-gradient(90deg, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 24%)"}}> <SiMysql/> MySQL</li>
                </ul>
                <ul>
                <h3>ETC</h3>
                <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white"}}> <BsGithub/> Git / GitHub</li>
                <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white"}}>  Figma</li>
                <li style={{marginTop:"5px", padding:"5px",textAlign:"start", border:"2px solid white"}}>  Some GraphQL</li>
                </ul>
              </div>
            </Collapse>
            </Col>
            <Col className="text-center"  title="projects" style={{paddingTop: "20px"}}><AnchorLink to ="/#projects" ><h1>Projects <TbMessageDots/> </h1></AnchorLink></Col>
          </Row>
          </Container>
      </Wrapper>
      )
}

const Wrapper = styled.section`
  #example-collapse-text { 
    color: white;
    font-size: 1.3em;
    text-align: justify;
  }

  #example-collapse-text2{
    color: white;
    font-size: 1.3em;
    text-align: justify;
  }

  h1:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  h1 {
    font-size: 3em;
  }

  ul{
    list-style-type:none;
  }

`
