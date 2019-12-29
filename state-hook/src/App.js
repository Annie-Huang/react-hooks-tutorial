import React from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwoStateDependOnPrevState from "./components/HookCounterTwoStateDependOnPrevState";
import HookCounterThree from "./components/HookCounterThree";

function App() {
    return (
        <div className="App">
            {/*<ClassCounter />*/}
            {/*<HookCounter/>*/}
            <HookCounterTwoStateDependOnPrevState />
            {/*<HookCounterThree />*/}
        </div>
    );
}

export default App;
