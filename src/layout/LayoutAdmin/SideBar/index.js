// FRAMEWORK IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// MY IMPORTS
import { faSquareCaretLeft } from "../../../assets/icons";
import menuSideBar from "../../../assets/admin/menuSideBar";
import Logo from '../../../components/Logo'

// STYLES
import "./side-bar.scss";
import AccordionCustom from "../../../components/admin/AccordionCustom";
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
