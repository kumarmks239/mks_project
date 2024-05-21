import React from "react";
import { PropsOne } from "./Props/PropsOne";
import { PropsSecon } from "./Props/PropsSecon";

export const App = () => {
  return (
    <div>
      <h1>
        Props are used to pass data and event handlers down to child components.
      </h1>
      <h2>
        They allow components to be dynamic and reusable by enabling the
        customization of the component's output.
      </h2>
      <PropsOne name="Props One" />
      <PropsSecon name=" Props Second" />
    </div>
  );
};
export default App;
