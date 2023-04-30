import React from 'react';
import { Scene } from './Scene';
import { Canvas } from '@react-three/fiber';
import { LoadingScreen } from './LoadingScreen';
import './styles/_global.scss';
import { BrowserRouter } from 'react-router-dom';

const App3D = () => (
  <React.Fragment>
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
      }}
      camera={{ position: [-100, 50, 200], zoom: 1.25 }}
    >
      <BrowserRouter>
        <Scene />
      </BrowserRouter>
    </Canvas>
    <LoadingScreen />
  </React.Fragment>
);

export default App3D;
