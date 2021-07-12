import { combineReducers } from 'redux'
import contactsreducer from './contactsreducer'

export default combineReducers({
    
    contacts:contactsreducer
})