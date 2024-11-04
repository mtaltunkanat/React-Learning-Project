import { useState } from "react"
import Test from './Test'

function App() {

  const[show, setShow] = useState(false)

  return (
    <div className="container">
    <button onClick={() => setShow(show => !show)}>
      {show ? 'Gizle' :  'Göster'}
    </button>
    {show && <Test/>}
      
    </div>
  )
}

export default App
