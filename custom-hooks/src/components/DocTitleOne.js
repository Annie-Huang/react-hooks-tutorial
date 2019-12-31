import React, {useState} from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocTitleOne = () => {
    const [count, setCount] = useState(0);

    // // Updating the document title is a side effect so the code goes within the useEffect hook.
    // useEffect(() => {
    //     document.title = `Count ${count}`;
    // }, [count]);
    //
    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
};

export default DocTitleOne;
