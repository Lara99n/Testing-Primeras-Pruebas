import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [state, setState] = useState(value);

  const handleMas = () => {
    setState(state + 1);
  };

  const handleMenos = () => {
    setState(state - 1);
  };

  const handleReset = () => {
    setState(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{state}</h2>
      <button onClick={handleMas}>+1</button>
      <button onClick={handleMenos}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterApp;
