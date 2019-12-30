import React, {useState, useMemo} from 'react';

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    // Every time the state is updated, .e.g when you click Count Two, the component will be rerendered.
    // And isEven function is called again.
    // isEven is slow so hence update the page is slow.
    // const isEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     return counterOne % 2 === 0;
    // };

    // useCallback cache the the provided function itself.
    // useMemo invoked the provided function and cache its result.
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                {/*<span>{isEven() ? ' Even' : ' Odd'}</span>*/}
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    );
};

export default Counter;
