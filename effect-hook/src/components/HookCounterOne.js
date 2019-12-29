import React, {useState, useEffect} from 'react';

const HookCounterOne = () => {
    const [count, setCount]  = useState(0);

    // The passed in parameter is a function that is getting executed after render of every render of the component.
    // which means after the first render and after every update.
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
