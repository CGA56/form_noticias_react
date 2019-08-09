import React, { Component } from "react";
import PropTypes from "prop-types";

class Formulario extends Component {
  state = {
    categoria: "general"
  };

  cambiarCategoria = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        // PASARLO AL App.JS
        this.props.consultarnNoticias(this.state.categoria);
      }
    );
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Busca las noticias por categoria</h2>

            <div className="input-field col s12 ">
              <select onChange={this.cambiarCategoria}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// CREA LA DOCUMENTACION DE NUESTRA APLICACION
Formulario.propTypes = {
  consultarnNoticias: PropTypes.func.isRequired
};
export default Formulario;
