import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
function CustomToggle({ children, eventKey, setShow, show }) {
  const decoratedOnClick = useAccordionButton(eventKey, (e) => setShow(!show));
  return <div onClick={decoratedOnClick}>{children}</div>;
}
function AccordionCustom({ menuSideBar }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleNavigate = (item, idx) => {
    if (item.subMenu) {
      return;
    }
    navigate(item.to);
  };
  const location = useLocation();
  console.log(location);
  return (
    <Accordion>
      {menuSideBar.map((item, idx) => (
        <Card key={idx}>
          <Card.Header
            className={`${location.pathname === item.to ? "active" : ""}`}
          >
            <CustomToggle eventKey={idx} setShow={setShow} show={show}>
              <div
                className="d-flex justify-content-between"
                onClick={() => handleNavigate(item, idx)}
              >
                <div className="d-flex align-items-center">
                  <small
                    style={{
                      width: "40px",
                      display: "inline-block",
                    }}
                  >
                    <span className="d-flex justify-content-center align-items-center">
                      {" "}
                      <FontAwesomeIcon className="fs-5" icon={item.iconLeft} />
                    </span>
                  </small>
                  <span>{item.title}</span>
                </div>
                <div>
                  {item.subMenu && (
                    <FontAwesomeIcon
                      className={`${show ? "active" : ""} fs-3 pe-2`}
                      icon={item.iconRight}
                    />
                  )}
                </div>
              </div>
            </CustomToggle>
          </Card.Header>
          {item.subMenu && (
            <Accordion.Collapse eventKey={idx}>
              <Card.Body>
                {item.subMenu.map((subItem, idx) => (
                  <Link
                    className={`${
                      location.pathname === subItem.to ? "active" : ""
                    }`}
                    to={subItem.to}
                    key={idx}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          )}
        </Card>
      ))}
    </Accordion>
  );
}
export default AccordionCustom;
