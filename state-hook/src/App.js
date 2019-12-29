import React from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwoStateDependOnPrevState from "./components/HookCounterTwoStateDependOnPrevState";
import HookCounterThreeStateIsObject from "./components/HookCounterThreeStateIsObject";

function App() {
    return (
        <div className="App">
            {/*<ClassCounter />*/}
            {/*<HookCounter/>*/}
            {/*<HookCounterTwoStateDependOnPrevState />*/}
            <HookCounterThreeStateIsObject />
        </div>
    );
}

export default App;
