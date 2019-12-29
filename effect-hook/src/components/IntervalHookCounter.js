import React, {useState, useEffect} from 'react';

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    };

    // If you think dependent array as a way to specify when you want to run the useEffect, you will run into problems.
    // Instead, dependency array should be thought as a way to let React know about everything that useEffect must watch
    // for changes.
    // So but enter [], we tell React don't watch any variable change, just do it for the initial rendering.
    // Adding [count], it means we will want for count value change. And if it changes, we will  update the component
    // (the one int the return section)
    useEffect(() => {
        const  interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [count]);

    return (
        <div>
            {count}
        </div>
    );
};

export default IntervalHookCounter;
