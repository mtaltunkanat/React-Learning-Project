import logo from "./logo.svg"
import useEffect from "./useEffect"
//importla useeffecti
function App() {
  useEffect(() => {
    if(process.env.NODE_ENV === 'production'){
      //analytici bilgilendir
    }
  }, [])
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      {process.env.NODE_ENV === 'proudction' &&(
        <>
        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
        </>
      )}
    </div>
  );
}

export default App;
