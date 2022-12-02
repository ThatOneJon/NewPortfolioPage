import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Error(){
    return (
        <Container>
            <Row lg={1} className="justify-content-center align-items-center" style={{height:"100vh"}}>
                <Col className="text-center">
                    <h1 style={{fontSize:"90px"}}>404 - Page not Found!</h1>
                </Col>
            </Row>
        </Container>
    )
}