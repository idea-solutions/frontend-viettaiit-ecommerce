import { Container, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBell,
  faComment,
  faMagnifyingGlass,
  faSun,
  faUser,
} from "../../../assets/icons";
import CustomToggle from "../../../components/Toggle";

import "./navbar.scss";
function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-dark navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-betweent"
        >
          <Form className="d-flex flex-grow-0 position-relative">
            <Form.Control
              type="text"
              placeholder="Tìm kiếm..."
              className="px-3 "
              aria-label="Search"
            ></Form.Control>
            <span className="search position-absolute translate-middle-y">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0 m-0 d-flex gap-1"
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link className="px-3 text-white mt-1 ">
              <div className="px-2 py-1 rounded-5 d-flex align-items-center">
                <span className="">
                  <FontAwesomeIcon icon={faSun} spin size="lg" />
                </span>
              </div>
            </Nav.Link>
            <Nav.Link className="px-3 text-white mt-1 ">
              <div className="px-2 py-1 rounded-5 d-flex align-items-center position-relative">
                <FontAwesomeIcon size="lg" icon={faBell} />
                <span
                  className=" position-absolute  top-0 end-0  px-1 rounded-5 bg-info border  border-white"
                  style={{
                    fontSize: "10px",
                  }}
                >
                  7
                </span>
              </div>
            </Nav.Link>
            <Nav.Link className="px-3 text-white mt-1 ">
              <div className="px-2 py-1 rounded-5 d-flex align-items-center position-relative">
                <FontAwesomeIcon size="lg" icon={faComment} />
                <span
                  className=" position-absolute  top-0 end-0  px-1 rounded-5 bg-danger border  border-white"
                  style={{
                    fontSize: "10px",
                  }}
                >
                  7
                </span>
              </div>
            </Nav.Link>
            <Nav.Link className="px-3 text-white ">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  <div className="bg-info px-2 py-1 rounded-5 position-relative d-flex align-items-center">
                    <FontAwesomeIcon className="fs-4" icon={faUser} />
                    <span className=" position-absolute p-1 bottom-0 end-0  rounded-5 bg-success border border-white"></span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className=" shadow-sm">
                  <Dropdown.Item eventKey="1">
                    <FontAwesomeIcon icon={faArrowRightToBracket} fade />
                    <small> Đăng nhập</small>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <FontAwesomeIcon
                      flip="both"
                      icon={faArrowRightToBracket}
                      fade
                    />
                    <small> Đăng ký</small>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
