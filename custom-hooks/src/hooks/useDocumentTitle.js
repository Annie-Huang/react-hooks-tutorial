import {useEffect} from 'react';

const UseDocumentTitle = (count) => {
    // Updating the document title is a side effect so the code goes within the useEffect hook.
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
};

export default UseDocumentTitle;
