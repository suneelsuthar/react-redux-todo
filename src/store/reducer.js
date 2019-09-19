const INITIAL_STATE = {
    itemArray: []
}


const reducer = (state = INITIAL_STATE, action) => {
console.log(action)
    switch (action.type) {
        case "empty" :
            return { ...state, itemArray:[].concat() }
        case "getData":
            state.itemArray.push(action.payload)
            return { ...state, itemArray: state.itemArray.concat() }

        case "add":
            return { ...state, itemArray: state.itemArray.concat() }

        case 'delete':
            state.itemArray.splice(action.payload, 1)
            return { ...state, itemArray: state.itemArray.concat() }

        case 'edit':
            state.itemArray[action.payload.ind].edit = false
            return { ...state, itemArray: state.itemArray.concat() }

        case 'cancel':
            state.itemArray[action.payload].edit = true
            return { ...state, itemArray: state.itemArray.concat() }


        case 'update':
            state.itemArray.splice(action.payload.ind,1,(action.payload.obj))
            return { ...state, itemArray: state.itemArray.concat() }



        default: return state

    }

}


export default reducer
