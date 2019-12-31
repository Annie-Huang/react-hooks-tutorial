import {useState} from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    };
};

export default useInput;
