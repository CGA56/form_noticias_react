import React from "react";
import PropTypes from "prop-types";

// STATELES FUNCTIONAL COMPONENT
const Header = ({ titulo }) => (
  <nav className="nav-wrapper light-blue darken-3">
    <a className="brand-logo center" href="true">
      {titulo}
    </a>
  </nav>
);

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};
export default Header;
