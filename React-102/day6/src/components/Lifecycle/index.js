import React, { useState } from 'react'
import Counter from './Counter'
const Lifecycle = () => {
    const [show, setShow] = useState(false)
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Application</button>
            {show && <Counter />}
        </div>
    )
}

export default Lifecycle