import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ProjectCard(){
    return (
        <Card bg='dark' text='light' style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Project Name</Card.Title>
                <Card.Text>
                    Project Description
                </Card.Text>
                <Button variant="primary">See More</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;