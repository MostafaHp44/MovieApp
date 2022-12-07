import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import bre from './bre.jpg'

function MovieCards(props) {
   
  return (

    <div className='c1'>
  <Container>
      <Row >
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bre} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bre} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>


    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bre} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bre} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    
   
    </Row>

    </Container>    
        
    
    </div>
    
  );
}

export default MovieCards;