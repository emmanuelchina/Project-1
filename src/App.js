
import './App.css';
import './Header'
import Example from './Header';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Content'
import AutoLayoutExample from './Content';
import Main from './main';

import { useState } from 'react';

function App() {

  

  return (
    <div className="App">
    <Example/>
    <AutoLayoutExample/>
    <Main/>
   
    </div>
  );
}

export default App;
