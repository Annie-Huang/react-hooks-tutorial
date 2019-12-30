import React, { useState, useCallback } from 'react'
import Count from './Count';
import Button from './Button';
import Title from './Title';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // a new incrementAge function is created when each time the parent component rerenders.
    // when dealing with functions, we always need to consider of reference Equivity.
    // So the function before the rerender is different from the function after the rerender because their pointer is different.
    // And because the function is a props, the React see the props has changed, so rerender the child again.
    const incrementAge = () => {
        setAge(age + 1);
    };

    const incrementSalary = () => {
        setSalary(salary + 1000);
    };

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;
