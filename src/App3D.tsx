import React from "react";
import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
import { LoadingScreen } from "./LoadingScreen";
import "./styles/_global.scss";
import { BrowserRouter } from "react-router-dom";
import { Html, useProgress } from "@react-three/drei";
import Loader from "./Loader";

const App3D = () => {
  const progress = useProgress();

  const loaded = progress.loaded >= 5;

  return (
    <React.Fragment>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "#000",
        }}
        camera={{ position: [-100, 50, 200], zoom: 3 }}
      >
        <BrowserRouter>
          {!loaded ? (
            <Html center>
              <Loader />
            </Html>
          ) : (
            <Scene />
          )}
        </BrowserRouter>
      </Canvas>
      {loaded && <LoadingScreen />}
    </React.Fragment>
  );
};
export default App3D;
