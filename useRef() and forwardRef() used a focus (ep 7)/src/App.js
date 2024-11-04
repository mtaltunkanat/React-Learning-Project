import { useRef, forwardRef } from "react"

function Input (props, ref){
 return <input ref={ref} type="text" {...props}/>
}

Input = forwardRef(Input)

function App() {
 
  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()

  }
  return (
    <>
     <h1>useRef() - useForward()</h1>
     <Input ref={inputRef}/>
     <button onClick={focusInput}>Focusla</button>
    </>
  );
}

export default App;
