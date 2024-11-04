import logo from "./logo.svg"
import styles from './App.module.css'//! import styles from './App.module.css (böyle olunca object oluyor css) ama aynı klasördeki style.css de adını App.modu.css yapmalı
import Test from "./Test"
import { Title } from "./Component"
import Bootstrap from "./Bootstrap"
import Tailwind from "./Tailwind"
import "./style.scss"
import "./tailwind.css"

function Styles (){
    //* classname e ad vermek yerine objeyi veriyoruz ve direkt etkiliyor
    <div className={styles.App}> 
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p className="env">
          {process.env.REACT_APP_API_URL}
          <span>Test</span>
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
}
export default Styles