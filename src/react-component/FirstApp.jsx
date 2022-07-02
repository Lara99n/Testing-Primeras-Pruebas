import React from "react";
import PropTypes from "prop-types";

export default function FirstApp({ titulo, subtitulo, name }) {
  return (
    <>
      <h1 data-testid="test-title">{titulo}</h1>
      <p>{subtitulo}</p>
      <p>{subtitulo}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Lara Albornoz",
  subtitulo: "No hay subtitulo",
  /*  titulo: "No hay titulo", */
};
