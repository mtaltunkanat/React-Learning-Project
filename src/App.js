/* import { createElement } from "react"; */
import "./style.scss";

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];
/*   const h1 = createElement('h1', null, 'google.com');
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));
 */
  // Tek bir `return` ifadesi kullanarak JSX ile tüm yapıyı oluşturalım
  return (
    <main id="main" className="test">
      <h1 style={{color :'red', backgroundColor:'yellow'}}>google.com</h1>
      <label htmlFor="search">Arama</label>
      <input type="text" id="search"/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

