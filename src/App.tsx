import { Canvas } from '@react-three/fiber';
import './App.css';

import ReactDOM from 'react-dom'
import Box from './components/box';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="container">
     <Canvas
      style={{ height: 800, width: '100%' }}
      camera={{ fov: 55, position: [0, 4, 4] }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} />
      <Box  position={[0,0,0]} />
      <Box  position={[0,2,0]} />
      <Box  position={[0,0,2]} />
      <OrbitControls />
    </Canvas>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
