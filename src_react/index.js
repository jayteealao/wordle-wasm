import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { WordleBoard, WordleLetter, WordleWord } from "./wordle";
import { Keyboard, KeyboardKeys, KeyboardRows } from "./keyboard";


const wasm = import("../pkg/index");

wasm.then((m) => {

  const App = () => {

    return (
      <>
        <div>
          <h1 className="text-3xl font-bold underline">Hi there</h1>
          <button onClick={ m.greet }>Run Computation</button>
          <WordleBoard/>
          <Keyboard/>
        </div>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});