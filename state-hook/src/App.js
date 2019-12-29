import React from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwoStateDependOnPrevState from "./components/HookCounterTwoStateDependOnPrevState";
import HookCounterThreeStateIsObject from "./components/HookCounterThreeStateIsObject";
import HookCounterFourStateIsArray from "./components/HookCounterFourStateIsArray";

function App() {
    return (
        <div className="App">
            {/*<ClassCounter />*/}
            {/*<HookCounter/>*/}
            {/*<HookCounterTwoStateDependOnPrevState />*/}
            {/*<HookCounterThreeStateIsObject />*/}
            <HookCounterFourStateIsArray/>
        </div>
    );
}

export default App;
