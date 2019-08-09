import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import NoticiasLista from "./components/NoticiasLista";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: []
  };
  // EN UN CLASS COMPONENT USUALMENTE SE LLAMA A UNA API DESDE EL componentDidMount
  componentDidMount() {
    this.consultarnNoticias();
  }
  // CONSUMIENDO API
  consultarnNoticias = async (categoria = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6351895b31944f76b907a13bce1568c7`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias de ciencia" />
        <div className="container white contenedor-noticias">
          <Formulario consultarnNoticias={this.consultarnNoticias} />
          <NoticiasLista noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
