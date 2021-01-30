import React, {useState} from "react";
import ReactDOM from "react-dom";

function App () {
const [newItem, setNewItem] = useState('');
const [list, setList] = useState([]);
const [count, setCount] = useState(0);

const addItem = () => 
  {
    const todo= {id: count, text: newItem };
    list.push(todo);
    setList(list);
    setNewItem('');
    setCount(count + 1);
  }

  const deleteItem = (id) =>
  {
   let updatedList = list.filter(item => item.id!=id);
    setList(updatedList);
  }

  return(
    <div className="App">
      <div>Add an Item</div>
      <br />
      <input type="text" placeholder="type the item here" value= {newItem} onChange={ e => setNewItem(e.target.value) }/>
      <button onClick = {addItem} >Add</button>
      <br/>
        {list.map((arrItem) => {
            return(
              <li key={arrItem.id}>
              {arrItem.text}
              <button onClick = {() => deleteItem(arrItem.id)}> X </button>
              </li>
            );
          }
        )}
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById("root"));