import "./NavbarMenu.sass";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiPiggyBank } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const navigate = useNavigate();

  const handleClickLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <GiPiggyBank onClick={(e) => handleClickLink(e, "/")} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Controle Financeiro <GiPiggyBank />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={(e) => handleClickLink(e, "/")}>
                  Cadastrar Finanças
                </Nav.Link>
                <Nav.Link onClick={(e) => handleClickLink(e, "/Consulta")}>
                  Consultar Finanças
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
