import React from "react";
import ReactDOM from "react-dom";


const wasm = import("../pkg/index");

wasm.then((m) => {

  const App = () => {

    return (
      <>
        <div>
          <h1>Hi there</h1>
          <button onClick={ m.greet }>Run Computation</button>
        </div>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});