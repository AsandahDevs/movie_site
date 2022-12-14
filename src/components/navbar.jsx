import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="rgba(0,0,0,0.9)" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={"https://dreampalace.netlify.app/Assets/film_reel.png"}
            alt="movie reel"
            height="35"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="movies">
              Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
