import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createContact, editContacts } from '../actions'

const FormComponent = (props) => {

    const [name, setname] = useState(props.name?props.name:'')
    const [email, setemail] = useState(props.name?props.email:'')
    const [phoneno, setphoneno] = useState(props.phoneno?props.phoneno:'')
    const [address, setaddress] = useState(props.address?props.address:'')
    const [company, setcompany] = useState(props.company?props.company:'')
    const dispatch = useDispatch(createContact)
    const dispatch1 = useDispatch(editContacts)

    const response=useSelector(state=>state.contacts.response)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(props.name){
            dispatch1(editContacts(props.id,name,email,phoneno,address,company,props.color))
        }
        else{
            dispatch(createContact(name,email,phoneno,address,company))
        }
    }

    return (
        <div>
            {response?<div class="ui positive message">Contact successfully edited</div>:null}
            <div className='ui segment'>
           <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Full Name</label>
                    <input type="text" value={name} onChange={e=>{setname(e.target.value)}} name="full-name" placeholder="full Name" required/>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e=>{setemail(e.target.value)}} name="email" placeholder="Email" required/>
                </div>
                <div class="field">
                    <label>Phone number</label>
                    <input type="tel" value={phoneno} onChange={e=>{setphoneno(e.target.value)}} name="phoneno" placeholder="enter 10 digit number" pattern='[0-9]{10}' required/>
                </div>
                <div class="field">
                    <label>Address</label>
                    <input type="text" value={address} onChange={e=>{setaddress(e.target.value)}} name="address" placeholder="address" required/>
                </div>
                <div class="field">
                    <label>Company</label>
                    <input type="text" value={company} onChange={e=>{setcompany(e.target.value)}} name="company" placeholder="company" required/>
                </div>
                <button class="ui green button" type="submit">Submit</button>
                <button class="ui red button" type="submit" onClick={e=>{props.handletoggle(false)}}>Cancel</button>
                
                
            </form>
            </div>
        </div>
    )
}

export default FormComponent
