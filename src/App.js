/* import { createElement } from "react"; */
//import "./style.scss";
import "./tailwind.css"
import Button from "./Components/Button"
import Tab from "./Components/Tab"
import { useState } from "react";

/* function Button(props){
  return <button>{props.text}</button>
} */
function Profile() {
  console.log('profil tabına geldin!')
  return(
    <div>
      burası profil tabı
    </div>
  )
}

  function App() {
  const todos = ['todo1', 'todo2', 'todo3'];

  const[activeTab, setActiveTab] = useState(1)
/*   const h1 = createElement('h1', null, 'google.com');
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));
 */
  /* const searchFunction = () => {
    alert('hello!')
  } */
  return (//styller camelCase e dönüyor
    <>

      <div style={{padding:20}}>
        <button onClick={() => setActiveTab(2)}>
          Aktif Tabı Değiştir
        </button>
        <Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)}>
          <Tab.Panel title="Profil"><Profile /></Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && (
          <div>
            burası da ekstra bir alan
          </div>
        )}
      </div>


    <div style={{padding:20}}>
    {/* ya böyle yaparsın yada aşağıdaki gib children(yani Button parametresi ortasına içine yazıcan) şeklinde
    <Button text="Buton Örneği"/>
    <Button text="Buton Örneği" variant="success"/>
    <Button text="Buton Örneği" variant="danger"/>
    <Button text="Buton Örneği" variant="warning"/> */}
    <Button>Button Örneği</Button>
    <Button variant="success">Button Örneği</Button>
    <Button variant="danger">Button Örneği</Button>
    <Button variant="warning">Button Örneği</Button>
    </div>
      <h1 tabIndex="3" style={{color :'red', backgroundColor:'yellow'}}>google.com</h1>
      <label htmlFor="search" tabIndex="2" onClick={() => alert('merhaba')}>Arama</label>
      <input type="text" id="search" tabIndex="1"/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            </li>
        ))}
      {/*  {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            </li>
        ))} */}
      </ul>
    </>
  );
}

export default App;

