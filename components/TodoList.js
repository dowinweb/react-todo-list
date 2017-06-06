/**
 * Created by dongwei on 2017/6/4.
 */
import React from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    render (){
        return (
            <ul>
                {
                    this.props.todos.map((item,index)=>{
                        return <TodoItem key={item.id} todo={item} dispatch={this.props.dispatch} actions={this.props.actions}/>
                    })
                }
            </ul>
        )
    }
}
