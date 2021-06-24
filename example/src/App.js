import React from 'react'

import Parallax from '@basith374/parallax-background'
import '@basith374/parallax-background/dist/index.css'

import bg0 from './assets/bg_layer_0.png';
import bg1 from './assets/bg_layer_1.png';
import bg2 from './assets/bg_layer_3.png';

const App = () => {
  return <div className="App">
    <div className="intro">
      <h1>Parallax<br />Images</h1>
    </div>
    <div className="hero">
      <Parallax images={[bg0, bg1, bg2]} />
    </div>
  </div>
}

export default App
