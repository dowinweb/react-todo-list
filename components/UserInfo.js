
import React from 'react';
// import actions from '../redux/action';

export default class UserInfo extends React.Component {

    handleNewId(){
        this.props.actions.createNewUserId();
    }
    handleNewIdIfOdd(){
        this.props.actions.createNewUserIdIfOdd();
    }
    handleNewIdIfAsync(){
        this.props.actions.createNewUserIdAsync();
    }
    render (){
        return(
            <li>
                <div>username: {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick = {this.handleNewId.bind(this)}>Update with random ID</button>
                <button onClick = {this.handleNewIdIfOdd.bind(this)}>Update only If odd</button>
                <button onClick = {this.handleNewIdIfAsync.bind(this)}>Update async</button>

            </li>
        )
    }
}