import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Sky, OrbitControls, Html } from "@react-three/drei";
import { useControls } from "leva";
import Baseball from "./models/Baseball";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="anim">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 10, 40], fov: 50 }}>
          <Physics>
            <Sky />
            <OrbitControls />
            <spotLight position={[0, 10, 200]} />
            <Board />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
