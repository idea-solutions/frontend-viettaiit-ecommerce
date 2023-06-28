// FRAMEWORK IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// MY IMPORTS
import { faSquareCaretLeft } from "../../assets/icons";
import menuSideBar from "../../assets/sideBar";
import Logo from "../Logo";

// STYLES
import "./side-bar.scss";
import AccordionCustom from "../AccordionCustom";
function SideBar() {
  return (
    <div className="side-bar bg-dark shadow-sm vh-100">
      <div className="header d-flex justify-content-between align-items-center p-3">
        <Logo />
        <FontAwesomeIcon
          bounce
          className="fs-4 text-secondary"
          icon={faSquareCaretLeft}
        />
      </div>
      <AccordionCustom
        menuSideBar={menuSideBar}
      ></AccordionCustom>
    </div>
  );
}
export default SideBar;
