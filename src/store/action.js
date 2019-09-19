import firebase from '../Config/Firebase/Firebase'


let database = firebase.database().ref('/')
const getData = ()=>{
    return async dispatch =>{
        database.child('todoList').on('child_added',res=>{
            let data = res.val()
            data.id = res.key
            console.log(data)
            dispatch({type:'getData',payload:data})
        })

    }
}


const addTodo = (name) => {
    // console.log(name)
    return async dispatch =>{
    
    let id = database.child('todoList').push().key
    let obj = {
        value:name,
        id,
        edit:true
    }
    if(name !== ""){     

    database.child(`todoList/${obj.id}`).set(obj)
    return {
        type: 'add',
    }
}
else{
    alert("enter list item..........")
}
}}



const remove = (val,ind)=>{
    return async dispatch =>{
        database.child(`todoList/${val.id}`).remove().then(
            dispatch({type:'delete', payload:ind})
        )
    }

}


const edit = (val,ind)=>{
    return async dispatch =>{
        database.child(`todoList/${val.id}`).update({edit:false}).then(
            dispatch({type:'edit', payload:{
                ind,
                name:val.value
            }})
        )
    }

}


const cancel = (val,ind)=>{
    return async dispatch =>{
        database.child(`todoList/${val.id}`).update({edit:true}).then(
            dispatch({type:'cancel', payload:ind})
        )
    }

}



const update = (val,ind,updateval)=>{

    let obj = {
        value:updateval,
        id:val.id,
        edit:true
    }

    return async dispatch =>{
        database.child(`todoList/${val.id}`).set(obj).then(
            dispatch({type:'update', payload:{
                    obj,
                    ind
            } })
        )
    }

}

export { getData,addTodo,remove,edit,cancel,update };