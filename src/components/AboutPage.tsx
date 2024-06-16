import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './projectCard'

function AboutPage() {
    return (
        <>
        <Container>
            <Card bg='dark' text='light' style={{width: '100%'}}>
                <Card.Body>
                    <Card.Title>Hi, I'm Euan.</Card.Title>
                    <Card.Text>
                        I am a Masters Student at RAU, studying Agricultural 
                        Technology and Innovation, with a degree 
                        in Computer Science.
                    </Card.Text>
                    <Button variant="primary">Find out more</Button>
                </Card.Body>
            </Card>
        </Container>

        <Container>
        <Card bg='dark' text='light' style={{width: '100%'}}>
            <Card.Body>
                <Card.Text>Featured Projects</Card.Text>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({length: 2}).map((_, idx) =>
                    <Col key={idx}>
                        <ProjectCard/>
                    </Col>
                    )}
                </Row>
            </Card.Body>
        </Card>
        </Container>
        </>
    );
}

export default AboutPage;