import React, {useState, useEffect} from 'react';

const HookCounterOne = () => {
    const [count, setCount]  = useState(0);
    const [name, setName]  = useState('');

    // The passed in parameter is a function that is getting executed after render of every render of the component.
    // which means after the first render and after every update.
    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;
