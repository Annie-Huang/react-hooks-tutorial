import React from 'react';
import './App.css';
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
    return (
        <div className="App">
            {/*<CounterOne />*/}
            {/*<CounterTwo />*/}
            {/*<CounterThree/>*/}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
}

export default App;
