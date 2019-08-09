import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";
// STATELES FUNCTIONAL COMPONENT
const NoticiasLista = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => (
      <Noticia noticia={noticia} key={noticia.url} />
    ))}
  </div>
);

NoticiasLista.propTypes = {
  noticias: PropTypes.array.isRequired
};
export default NoticiasLista;
