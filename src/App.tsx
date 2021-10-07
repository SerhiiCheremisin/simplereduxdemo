import React from 'react';
import './styles/styles.css';
import Sync from "./components/Sync";
import Async from "./components/Async";

function App():JSX.Element {
  return (
    <div className="main-wrapper">
      <div className="main-wrapper__sync-blog">
           <Sync/>
      </div>
      <div className="main-wrapper__async-blog">
        <Async/>
    </div>
    </div>
  );
}


export default App;
