import React from 'react';
import './App.css';
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";

function App() {
  return (
    <div className="App">
        {/*<ClassCounterOne />*/}
        {/*<HookCounterOne/>*/}
        {/*<ClassMouse />*/}
        {/*<HookMouse />*/}
        {/*<MouseContainer />*/}
        <IntervalClassCounter />
    </div>
  );
}

export default App;
