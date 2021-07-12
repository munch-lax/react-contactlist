export default (state={},action)=>{
    
    switch(action.type){
        case 'FETCH_CONTACTS':
            return {...state,data:action.payload}
        case 'CREATE_CONTACT':
            return{...state,[action.payload.id]:action.payload}
        case 'EDIT_CONTACTS':
            
            return {...state,response:action.payload}
        default:
            return state
    }
}