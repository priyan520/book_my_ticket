import React, { useEffect, useRef, useState } from 'react'

function Advance_react() {

    const [count, setcount] = useState(0);
    const a = useRef(0);
    const h1ref = useRef();
    const inputref = useRef();

    useEffect(() => {
        a.current++;    
        console.log(`hello world ${a.current}`);
    })

  return (
    <div>
        Hello world!!
        <br />
        <h1 ref={h1ref} >Hello</h1>
        <button onClick={() => {setcount(count + 1);h1ref.current.style.display = "none"}}>Pluse</button>
        <input type="text" ref={inputref} />
        <button onClick={() => inputref.current.focus()}>click me</button>
    </div>
  )
}

export default Advance_react