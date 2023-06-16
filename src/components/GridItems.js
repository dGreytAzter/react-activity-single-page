import {Card, Col, Button,} from 'react-bootstrap';

const GridItems = (cards) => {



    return (


        <Col md="3" mt="5"> 
          <Card bg="dark">
            <Card.Img variant="top" src={cards.image} />
            <Card.Body>
              <Card.Title>{cards.title}</Card.Title>
              <Card.Text>{cards.text}</Card.Text>
              {/* <Button variant="danger">{cards.textbutton}
              </Button> */}
            </Card.Body>
          </Card>
        </Col>

        

    );
}
 
export default GridItems;