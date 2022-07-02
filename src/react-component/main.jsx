import React from "react";
import ReactDOM from "react-dom/client";
/* import FirstApp from "./FirstApp"; */
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*     <FirstApp titulo="Holiwi" /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
