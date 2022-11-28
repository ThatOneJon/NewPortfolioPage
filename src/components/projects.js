import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import projects from "../data/projects.json"
import styled from "styled-components"


export default function Projects() {
    let cards = projects.map((project) => {return (
        <Col>
            <Card border="primary" bg="light" className="allCards p-3 m-3">
                <Card.Header>{project.header}</Card.Header>
                <Card.Img variant ="top" src="https://picsum.photos/1000" />
                <Card.Body>
                <Card.Title>{project.subheader}</Card.Title>
                <Card.Text>{project.textbody}</Card.Text>
                </Card.Body>
                <Card.Footer>Code: <a  href={project.link}>Click here!</a></Card.Footer>

            </Card>
        </Col>
    )})
    return(
        <Wrapper>
            <Container fluid >
                <h1>... Projects</h1>
                <Row lg={4} className="justify-content-center ">
                    {cards.slice(0, 3)}
                </Row>
                <Row lg={4} className="justify-content-center ">
                    {cards.slice(3, 5)}
                </Row>
                <Row lg={4} className="justify-content-center">
                    {cards.slice(5, 8)}
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .allCards{
        color: black;
        min-width: 350px;
        height: auto;
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
`