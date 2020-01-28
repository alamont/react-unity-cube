import React from 'react';
import './App.css';
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "unity/Build/unity.json",
  "unity/Build/UnityLoader.js"
);

const App = () => {
  return (
    <div className="unity-canvas">
      <Unity className="unity" unityContent={unityContent} />
      <div className="overlay">
        <h1>Hello World!</h1>
        <button onClick={onLeft}>Left</button>
        <button onClick={onRight}>Right</button>
      </div>
    </div>
  );
}

const onLeft = () => {
  unityContent.send(
    "CubeController", 
    "Move", 
    -1
  );
}

const onRight = () => {
  unityContent.send(
    "CubeController", 
    "Move", 
    1
  );
}

export default App;
  