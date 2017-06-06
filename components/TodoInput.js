/**
 * Created by dongwei on 2017/6/4.
 */
import React, {Component} from 'react';
// import actions from '../redux/action';

class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: 'Type in your todo'
        };
    }
    
    handleChange(e){
        console.log('changed', e.target.value);
        this.setState({
            inputText: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('submit button');
        // this.props.dispatch(actions.addTodo(this.state.inputText));
        this.props.addTodo(this.state.inputText);
    }
    
    handleKeyDown(e){
        console.log(e.keyCode);
        if(e.keyCode===13){
            // this.props.dispatch(actions.addTodo(this.state.inputText));
            this.props.addTodo(this.state.inputText);
        }
        
    }
    render(){
        return(
            <div>
                
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    defaultValue = {this.state.inputText}
                />
                <button  onClick = {this.handleSubmit.bind(this)}>Submit</button>
            </div>

        )
    }

}

export default TodoInput;