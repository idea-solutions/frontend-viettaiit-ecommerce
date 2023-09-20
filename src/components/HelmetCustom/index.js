import { Helmet } from "react-helmet-async";
import React from "react";
import logo from "../../assets/my-image.jpg";
import PropTypes from "prop-types";
function HelmetCustom({ title }) {
  console.log("HelmetCustom");
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={logo} />
    </Helmet>
  );
}

export default React.memo(HelmetCustom);

HelmetCustom.propTypes = {
  title: PropTypes.string,
};
