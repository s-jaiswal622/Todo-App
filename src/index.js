import React from "react";
import ReactDOM from "react-dom";
class App1 extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      count:0
    };
    this.addItem = this.addItem.bind(this);
    this.updateInput = this.updateInput.bind(this);
    //this.deleteItem = this.deleteItem.bind(this);
  }

  updateInput (event)
  {
    this.setState({newItem: event.target.value});
  }

  addItem()
  {
    const todo= {
     id: this.state.count,
      text: this.state.newItem
    };

    let list = this.state.list;
    list.push(todo);
    this.setState(
    {list: list,
    newItem: "",
    count: this.state.count + 1
    });
  }

  deleteItem(id)
  {
   let list = this.state.list;
   let updatedList = list.filter(item => item.id!=id);
    this.setState({ list: updatedList });
  }

  render()
  {
    return(
      <div className="App">
        <div>Add an Item</div>
        <br />
        <input type="text" placeholder="type the item here" value= {this.state.newItem}
        onChange={this.updateInput}/>
        <button onClick = {this.addItem} >Add</button>
        <br/>
          {this.state.list.map((arrItem) =>
            {
              return(
                <li key={arrItem.id}>
                {arrItem.text}
                <button onClick = {() => this.deleteItem(arrItem.id)}> X </button>
                </li>
              );
            }
          )}
      </div>
    );
  }
}
ReactDOM.render(<App1/>, document.getElementById("root"));
export default App1;