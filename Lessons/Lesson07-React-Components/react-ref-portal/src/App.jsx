import {useRef, useState } from 'react'
import Portal from "./components/Portal";
import './App.css'

function App() {
  const divRef = useRef();
  const [portalTarget, setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("Body ga Document ga");
  const handPortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal(divRef.current.textContent);
    
    console.log("When handPortal Works= ",divRef.current.textContent);
  }



  return (
    <>
      <div ref={divRef}>Tijaabo</div>
      <button onClick={() => console.log(divRef.current.textContent)}>Riix</button>
      <Portal target={portalTarget} text={textPortal}></Portal>
      <button onClick={handPortal}>Badal Portalka</button>
    </>
  )
}

export default App
