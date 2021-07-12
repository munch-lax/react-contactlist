import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../actions'
import './css/Content.css'
import DetailCard from './DetailCard'
import Listitems from './Listitems'
const Content = () => {
    var data=useSelector(state=>state.contacts.data)
    const [selected, setselected] = useState({})
    
    const dispatch = useDispatch(fetchContacts)
    useEffect(() => {
        dispatch(fetchContacts())
    }, [])

    const handleClick=(id)=>{
        
        var result = data.filter(value=>{
            if (value.id==id){
              return value
            }
          })
          
        setselected(result[0])
    }
   
    return (
        <div className='row' style={{marginLeft:20}}>
            <div class="col-md-6 col-sm-12" ><Listitems parentCallBack={handleClick} data={data}/></div>
            
           <div className='col-md-1 hidecol'></div>
            <div class="col-md-4 col-sm-12"><DetailCard selected={selected}/></div>
        
           
            
        </div>
    )
}

export default Content
