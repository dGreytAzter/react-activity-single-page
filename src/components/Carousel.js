import { Container, Carousel, } from 'react-bootstrap';
import vscode from './../assets/vscode-carousel.png';
import nodejs from './../assets/node-carousel.png';


const CarouselImage = () => {
    
    
    return (
      <Container>
        <Carousel>
          <Carousel.Item interval={2000} className='justify-content-center'>
            <img
              className="d-block w-100 h-80"
              src={vscode}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-80"
              src={nodejs}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
}
 
export default CarouselImage;