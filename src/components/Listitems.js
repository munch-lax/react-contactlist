import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
import Card from './Card'
import './css/Listitems.css'
import FormComponent from './FormComponent'
const Listitems = (props) => {

    const [search, setsearch] = useState('')
    const [toggle, settoggle] = useState(false)
    var data=props.data
    

    const handletoggle=(bool)=>{
        settoggle(bool)

    }
    
    const handleClick=(id)=>{
        props.parentCallBack(id)
    }

    return (
        <div className='container listwrapper'>
           <ul style={{listStyleType:'none',marginLeft:-40}}>
               <li>
                    <div className='row'>
                        <div className='col'>
                            <i className="fa fa-address-book fa-3x" style={{marginLeft:0}}></i>
                        </div>
                        <div className='logocontent'>
                            <h1>Contacts</h1>
                            <p style={{marginTop:-15}}>something goes here</p>
                        </div>
                    </div>
               </li>
               <li style={{marginTop:30}} >
                   <div className='row'>
                        <div class="search">
                            <input type="text" placeholder="Search..." value={search} onChange={e=>{setsearch(e.target.value)}}/>
                        </div>
                       <button className='addcontacts' onClick={e=>{settoggle(true)}} >+ Add Contacts</button>
                    </div>
               </li>
               <li >
                    <div className='row list'>
                        <div className='heading'>
                            <div className='col-1'>
                                <i className='fa fa-plus' style={{marginTop:-20}}></i>
                            </div>
                            <div className='col-6'>
                                Basic Info
                            </div>
                            <div className='col-4'>
                                Company
                            </div>
                        </div>
                    </div>

                </li>
                <div className='cardwrapper'>
                    {data?data.map(value=>{

                        if(search.length>0){
                            if (value.name.toLowerCase().includes(search.toLowerCase())){
                                return(
                            
                                    <li onClick={e=>{handleClick(value.id)}} >
                                        <Card email={value.email} name={value.name} company={value.company} key={value.id} color={value.color} phoneno={value.phoneno} address={value.address}/>
                                    </li>
                                )


                            }
                        }
                        else{
                            return(
                            
                                <li onClick={e=>{handleClick(value.id)}}>
                                    <Card email={value.email} name={value.name} company={value.company} key={value.id} color={value.color} phoneno={value.phoneno} address={value.address} id={value.id}/>
                                </li>
                            )
                        }
                        
                        
                    }):null}
                </div>
               
           </ul>
           <Modal open={toggle} onClose={e=>{settoggle(true)}} className='modal' >
                <Modal.Content>
                    <FormComponent handletoggle={handletoggle}/>
                        
                </Modal.Content>
            </Modal>

        </div>
    )
}

export default Listitems
