import React from 'react'

function Button({ handleClick, children }) {
    console.log('Rendering button - ', children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

// Adding React.memo so this functional component will not be rerendered if the props or state do not change.
export default React.memo(Button)
