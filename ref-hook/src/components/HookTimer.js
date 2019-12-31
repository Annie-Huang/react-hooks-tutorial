import React, {useState, useEffect, useRef} from 'react';

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [])

    // useRef can hold to a reference to the DOM node by using the ref attribute, it can also used to store any mutable value.
    // The value will persist through rerender while also not causing any additional renders when its value changes
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
};

export default HookTimer;
