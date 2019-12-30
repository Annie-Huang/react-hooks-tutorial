import React from 'react'

function Title() {
    console.log('Rendering Title');
    return (
        <h2>
            useCallback Hook
        </h2>
    )
}

// Adding React.memo so this functional component will not be rerendered if the props or state do not change.
export default React.memo(Title)
