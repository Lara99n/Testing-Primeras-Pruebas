import React from "react";
import PropTypes from "prop-types";

export const App = () => {
  const app = "lara";

  return <p>{app}</p>;
};

export default function FirstApp({ titulo }) {
  return (
    <>
      <h2>{App()}</h2>
      <h3>FirstApp</h3>
      <h3>{titulo}</h3>
    </>
  );
}

FirstApp.propTypes = {
  titulo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  titulo: "No hay titulo",
};
