/**
 * Created by dongwei on 2017/6/4.
 */
//这里呢是我们的action
let actions = {
    addTodo(text) {
        return {
            type: "ADD_TODO",
            text: text
        }
    },
    completeTodo(id){
        return{
            type:'COMPLETE_TODO',
            id: id
        }
    },
    
    deleteTodo(id){
        return{
            type:'DELETE_TODO',
            id:id
        }
    },
    
    createNewUserId(){
        // do some async server call
        // onSuccess: dipatch({})
        return{
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random()*100)
        }
    },
    
    createNewUserIdIfOdd(){
        return (dispatch, getState) => {
            const { user } = getState();
            if(user.id % 2 ==0){
                return 
            }
            dispatch(actions.createNewUserId());
        }
    },

    createNewUserIdAsync(){
        return (dispatch) =>{
            setTimeout(() => {
                dispatch(actions.createNewUserId());
            },2500);

            // $.ajax
            // $.get('url',{
            //     success:(res) => {
            //         dispatch(res.data)
            //     }
            // })
        }
    }
    
}

export default actions;
