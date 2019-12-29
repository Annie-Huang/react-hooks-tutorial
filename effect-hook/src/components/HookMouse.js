import React, {useState, useEffect} from 'react';

const HookMouse = () => {
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        // if not adding this code, you will get this error:
        // index.js:1 Warning: Can't perform a React state update on an unmounted component.
        // This is a no-op, but it indicates a memory leak in your application.
        // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        //     in HookMouse (at MouseContainer.js:9)
        return () => {
            console.log('Component unmouting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
};

export default HookMouse;
