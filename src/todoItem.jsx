import React,{Component} from "react";


class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state={
            abc:"1245"
        }
    }


    render() {
        return (
            <div>
                <li onClick={this.removeList.bind(this,this.props.index)}>{this.props.item}</li>
            </div>

        )
    }
    removeList(index){
        this.props.removeListParent(index,this.state.abc)
    }
}

export default TodoItem;
