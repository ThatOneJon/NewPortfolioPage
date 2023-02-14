import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import {GatsbyImage} from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel'
import {graphql, useStaticQuery} from "gatsby"
import Badge from 'react-bootstrap/Badge';


const  query = graphql`
query {
  allContentfulProjects {
    nodes {
      contentful_id
      description {
        description
      }
      languages
      links
      type
      pictures {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        title
      }
      title
    }
  }
}
`

export default function Projects() {
    const contentfulData = useStaticQuery(query);
    const projectsContentful = contentfulData.allContentfulProjects.nodes
    let cards2 = projectsContentful.map(project =>{
        let type = project.type
        return(
        <Col key={projectsContentful.indexOf(project)+2} name={project.type}>
            <Card border="primary" bg="light" className="allCards p-3 m-3">
                <Card.Header className="d-flex flex-row flex-wrap">
                    {
                        project.languages.map(lang => (<h3 style={{marginRight:"10px"}}><Badge key={lang}>{lang}</Badge></h3>)
                        )
                    }
                </Card.Header>
                <Carousel className="mt-3">
                {
                    project.pictures.map(pic => { return( 
                    <Carousel.Item >
                        <GatsbyImage key={pic.id} className="Gimage" image={pic.gatsbyImageData} alt="Project Image" /> 
                    </Carousel.Item>
                    )})
                }
                </Carousel>
                <Card.Body className="mt-2">
                <Card.Title className="mb-3" style={{textDecoration:"underline", fontWeight:"bold"}}>{project.title}</Card.Title>
                <Card.Text>{project.description.description}</Card.Text>
                </Card.Body>
                <Card.Footer style={{minHeight:"40px"}} className="d-flex justify-content-center">
                    {project.links && project.links.map(link => {
                        return(
                            <a key={link} href={link}><Button className="btn-lg mx-2" variant="dark">More </Button></a>
                        )}
                    )}
                </Card.Footer>
            </Card>
        </Col>
        )
    })
    // SORTING ----------------------------
    let cardsETC = []
    let cardsFR = []
    let cardsFull=[]
    cards2.map(card => {if(card.props.name[0] === "ETC"){
        cardsETC.push(card)
        }else if(card.props.name[0] === "Frontend"){
            cardsFR.push(card)
        }else{
            cardsFull.push(card)
        }
    })
    console.log(cardsETC)
    console.log(cardsFull)
    console.log(cardsFR)

    return(
        <Wrapper>
            <Container fluid >
                <h1 style={{marginBottom:"10vh"}}>... Projects</h1>

                <Row style={{marginBottom:"7vh"}}>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                    <h2 style={{fontSize: "2.3em",textAlign:"center"}}>Fullstack</h2>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                </Row>

                <Row lg={3} className="justify-content-center ">
                    {cards2[11]}
                    {cards2[7]}
                </Row>

                <Row style={{marginBottom:"7vh", marginTop:"7vh"}}>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                    <h2 style={{fontSize: "2.3em",textAlign:"center"}}>Frontend</h2>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                </Row>

                <Row lg={3} className="justify-content-center ">
                    {cards2.slice(0, 3)}
                </Row>

                <Row style={{marginBottom:"7vh", marginTop:"7vh"}}>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                    <h2 style={{fontSize: "2.3em",textAlign:"center"}}>Backend / In-between / Etc...</h2>
                    <div style={{backgroundColor:"white", width:"100%", height:"3px"}}></div>
                </Row>

                <Row lg={3} className="justify-content-center ">
                    {cards2[4]}
                    {cards2[5]}
                    {cards2[9]}
                </Row>
                <Row lg={3} className="justify-content-center ">
                    {cards2[10]}
                    {cards2[3]}
                    {cards2[6]}

                </Row>
                <Row lg={3} className="justify-content-center">
                    {cards2[8]}
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .allCards{
        color: black;
        min-width: 350px;
        height: 70vh;
        overflow: scroll;
    }
    .allCards:hover{
        box-shadow:15px 10px black;
        cursor: pointer;
    }
    h1{
        font-size:7em;
        text-align: center;
        margin-bottom: 50px;
    }
    .Gimage{
    }
`