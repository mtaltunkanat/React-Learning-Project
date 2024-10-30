import { useEffect } from "react";
import logo from "./logo.svg"
import styles from './App.module.css'//! import styles from './App.module.css (böyle olunca object oluyor css) ama aynı klasördeki style.css de adını App.modu.css yapmalı
import Test from "./Test"
import { Title } from "./Components"
import Bootstrap from "./Bootstrap"
import Tailwind from "./Tailwind"
import "./tailwind.css"
//importla useeffecti
function App() {
  useEffect(() => {
    if(process.env.NODE_ENV === 'production'){
      //analytici bilgilendir
    }
  }, [])
  return (//* classname e ad vermek yerine objeyi veriyoruz ve direkt etkiliyor
    <div className={styles.App}> 
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>
          {process.env.REACT_APP_API_URL}
        </p>
        <Test />
      {process.env.NODE_ENV === 'proudction' &&(
        <>
        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
        </>
      )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;
