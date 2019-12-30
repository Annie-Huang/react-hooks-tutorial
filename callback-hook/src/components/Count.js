import React from 'react'

function Count({ text, count }) {
    console.log(`Rendering ${text}`);
    return <div>{text} - {count}</div>
}

// Adding React.memo so this functional component will not be rerendered if the props or state do not change.
export default React.memo(Count)
