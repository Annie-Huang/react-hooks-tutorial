import React, {useState} from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            // setCount(count+1);
            // Any time you need to update the state value based on the previous state value,
            // always go for a safer option of passing a function that would set a new state value.
            setCount(prevState => prevState + 1);
        }
    };

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>

        </div>
    );
};

export default HookCounterTwo;
