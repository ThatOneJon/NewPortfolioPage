import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import projects from "../data/projects.json"
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

    let cards2 = projectsContentful.map(project => {
        return(
<Col key={projects.indexOf(project)+2}>
            <Card border="primary" bg="light" className="allCards p-3 m-3">
                <Card.Header className="d-flex flex-row flex-wrap">
                    {
                        project.languages.map(lang => <h3 style={{marginRight:"10px"}}><Badge key={lang}>{lang}</Badge></h3>
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
    return(
        <Wrapper>
            <Container fluid >
                <h1 style={{marginBottom:"12vh"}}>... Projects</h1>
                <Row lg={3} className="justify-content-center ">
                    {cards2.slice(0, 3)}
                </Row>
                <Row lg={3} className="justify-content-center ">
                    {cards2.slice(3, 5)}
                </Row>
                <Row lg={3} className="justify-content-center">
                    {cards2.slice(5, 9)}
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