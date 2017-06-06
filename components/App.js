
import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/action'
import UserInfo from './UserInfo'

class App extends Component {
    render(){
        console.log(this.props, this.props.dispatch);
        return(
            <div>
                <div>Todo List</div>
                <UserInfo user={this.props.user} actions={this.props.actions}/>
                <TodoInput dispatch={this.props.dispatch} addTodo={this.props.actions.addTodo}/>
                <TodoList dispatch={this.props.dispatch} actions={this.props.actions} todos={this.props.todos} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)