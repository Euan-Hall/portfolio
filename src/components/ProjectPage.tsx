import ProjectCard from './projectCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProjectPage() {
    return (
        <Row xs={1} md={3} className="g-4">
        {Array.from({length: 4}).map((_, idx) =>
          <Col key={idx}>
            <ProjectCard/>
          </Col>
        )}
      </Row>
    );
}

export default ProjectPage;
