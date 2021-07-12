import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
import './css/Card.css'
import FormComponent from './FormComponent'
const Card = ({name,email,company,color,phoneno,address,id}) => {

    const [toggle, settoggle] = useState(false)
    var initials=name?name[0]:''
    
    
    const handletoggle=(bool)=>{
        settoggle(bool)

    }

    return (
        <div className='row cardlist'>
            <div className='cardheading'>
                <div className='col-1' style={{marginTop:-28,marginRight:5}}>
                    <i className='fa fa-edit fa-lg'  style={{color:'black',cursor:'pointer'}} onClick={e=>{settoggle(true)}} ></i>
                </div>
                <div className='col-6' style={{whiteSpace:'nowrap'}}>
                    <div className='row'>
                    
                        <div className='col-2 namecircle' style={{backgroundColor:color}} ><p style={{marginTop:5,fontSize:15}}>{initials}</p></div>
                        <label className='col-7' style={{marginLeft:5}}>{name}<br></br><p style={{fontSize:13}}>{email}</p></label>
                    
                    </div>
                </div>
                <div  style={{marginLeft:15}} className='col-5'>
                    {company}
                </div>
                            
        </div>
            <Modal open={toggle} onClose={e=>{settoggle(true)}} className='modal' >
                <Modal.Content>
                    <FormComponent handletoggle={handletoggle} name={name} email={email} phoneno={phoneno} address={address} company={company} id={id} color={color}/>
                </Modal.Content>
        </Modal>
        </div>

    )
}

export default Card
