import { useState } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import GridItems from "./GridItems";
import vscode from "./../assets/vscode.png";
import css from "./../assets/css.png";
import github from "./../assets/github.png";
import html from "./../assets/html.png";
import javascript from "./../assets/javascript.png";
import nodejs from "./../assets/node.png";
import react from "./../assets/react.png";

import CarouselImage from "./Carousel";
import Tipsandtutorials from "./Tutorials";

const Content = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="g-4 content">
      <br />
      <Container className="justify-content-center text-light">
        <Row className="justify-content-center mt-5" id="explore-page">
          <CarouselImage></CarouselImage>
        </Row>
        
        <Container className="text-dark mt-4">
          <Tipsandtutorials></Tipsandtutorials>
        </Container>

        <Row className="justify-content-center mt-5 g-3">
          <GridItems
            image={vscode}
            button={{ onClick: handleShow }}
            textbutton="Tutorial Installation"
            title="VS CODE"
            text="Visual Studio Code is a free coding editor that helps you start coding quickly..."
          />
          <GridItems
            image={html}
            textbutton="Beginers Tutorial"
            title="HTML"
            text="HTML (Hypertext Markup Language) is a text-based approach to describing how content contained..."
          />
          <GridItems
            image={css}
            textbutton="Advanced Tutorial"
            title="CSS"
            text=" CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts..."
          />
          <GridItems
            image={javascript}
            textbutton="Beginers Tutorial"
            title="Javascript"
            text="JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language..."
          />
          <GridItems
            image={github}
            textbutton="Zero to Hero Tutorial"
            title="Github"
            text="GitHub is a code hosting platform for version control and collaboration. It lets you and others work together..."
          />
          <GridItems
            image={nodejs}
            textbutton="Tutorial Installation"
            title="NodeJS"
            text="Node.js is an open source, cross-platform runtime environment for executing JavaScript code..."
          />
          <GridItems
            image={react}
            textbutton="Zero to Hero Tutorial"
            title="React"
            text="React is a JavaScript-based UI development library. Facebook and an open-source developer..."
          />
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>How to Install</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Content;
