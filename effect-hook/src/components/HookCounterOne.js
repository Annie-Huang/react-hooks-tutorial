import React, {useState} from 'react';

const HookCounterOne = () => {
    const [count, setCount]  = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
