import React,{Component} from 'react';
import TodoItem from "./todoItem";
import axios from "axios";
import store from "./store";


class TodoList extends Component{
  constructor(props){
    super(props)
    this.state=store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleButtonClick=this.handleButtonClick.bind(this)
      // store.subscribe()
  }
    componentDidMount() {
        axios.get("/api/list").then((res)=>{
            this.setState(()=>({
                list:res.data
            }))
        })
    }
  render() {
    return (
        <div className="App">
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleButtonClick}>提交</button>
          <ul>
            {
              this.state.list.map((item,index)=>{
                return <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    removeListParent={this.removeListParent.bind(this)}
                />
              })
            }
          </ul>
        </div>
    );
  }
  removeListParent(index,abc){
    console.log(abc)
    let list=this.state.list;
    list.splice(index,1)
    this.setState(()=>({
      list
    }))
  }
  handleInputChange(e){
    let value=e.target.value;
    let action={
        type:"inputValue",

    }
    this.setState(()=>({
      inputValue:value
    }))
  }
  handleButtonClick(){
    let {inputValue,list}=this.state;
    let lists=[...list,inputValue];
    this.setState(()=>({
      list:lists,
      inputValue:""
    }))
  }
}

export default TodoList;
