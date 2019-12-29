import React, {useState, useEffect} from 'react';

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    // const tick = () => {
    //     setCount(count + 1);
    // };
    // Another way without putting [count] into useEffect watch list:
    const tick = () => {
        setCount(prevState => prevState + 1);
    };


    // If you think dependent array as a way to specify when you want to run the useEffect, you will run into problems.
    // Instead, dependency array should be thought as a way to let React know about everything that useEffect must watch
    // for changes.
    // So but enter [], we tell React don't watch any variable change, just do it for the initial rendering.
    // Adding [count], it means we will want for count value change. And if it changes, we will  update the component
    // (the one int the return section)
    // useEffect(() => {
    //     const  interval = setInterval(tick, 1000);
    //
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [count]);

    // Another way without putting [count] into useEffect watch list:
    useEffect(() => {
        // It's recommended that when you need to call a function to do something inside useEffect,
        // always defined the function inside useEffect, so you can easily adding the dependency (e.g. someProps)
        // in the watchlist.
        // https://twitter.com/dan_abramov/status/1098718196192997376?lang=en
        // function doSomething() {
        //     console.log(someProps);
        // }
        // doSomething();

        // From Dan's comment:
        // Doing
        //
        // useEffect(() => {
        //   foo(props.something)
        // }, [])
        //
        // and not specifying props.something in [] is *always* a bug.

        const  interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }

        // You should have [someProps] below:
    }, []);

    return (
        <div>
            {count}
        </div>
    );
};

export default IntervalHookCounter;
