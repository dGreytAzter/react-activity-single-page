import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Stack,
} from "react-bootstrap";
import HeaderVideo from "./../assets/header.mp4";
import codelogo from "./../assets/code-logo.gif";
import arrowdown from "./../assets/arrowdown.png";

const Heading = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid className="text-center text-light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={codelogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            J.I. Coding
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="heading text-center">
        <Container></Container>
        <Container>
          <h1 className="hero1">Web Development Tips & Tutorials</h1>
          <p className="hero2">
            Welcome to the world of web development! Whether you're a beginner
            or an experienced developer, here are some valuable tips and
            tutorials to enhance your skills.
          </p>
          <Button variant="outline-light" href="#explore-page">EXPLORE</Button>
        </Container>
        <Container>
          <img
            href="#explore-page"
            className="arrow-down z-1"
            src={arrowdown}
          />
        </Container>
      </Container>

      {/* <Container className="text-light text-center hero sticky">
          <Col>
            <h1 className="hero1">Web Development Tips & Tutorials</h1>
            <p className="hero2">
              Welcome to the world of web development! Whether you're a beginner
              or an experienced developer, here are some valuable tips and
              tutorials to enhance your skills.
            </p>
          <Button variant="outline-light" href="#explore-page">EXPLORE</Button>
          </Col>         
      </Container> */}
      <video
        src={HeaderVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", margin: "0 auto" }}
        className="video-header position-absolute"
      />
      {/* //   <Container className="text-center">
      //     <img href="#explore-page" className="arrow-down" src={arrowdown} />
      //     </Container> */}
    </div>
  );
};

export default Heading;
