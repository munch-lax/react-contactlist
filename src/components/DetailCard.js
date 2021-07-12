import React from 'react'
import './css/DetailCard.css'
const DetailCard = ({selected}) => {
    if(selected.name){
        var st=selected.name
        var str=(st.split(' '))
        console.log(str)
        var inital=''
        if (str.length==2){
            inital=str[0][0]+str[1][0]
        }
        else{
            inital=str[0][0]
        }
    }
    

    return (
        selected.name?
        <div className='row detailwrapper'>
            <div className='row avatarwrapper'>
                <div className='avatar' style={{backgroundColor:selected.color}}>
                    {inital}
                </div>
                <p style={{width:'100%'}}>{selected.name}</p>
               
                
            </div>
            <div className='row infowrapper'>
                <div className='row detailitem'>
                   <p className='col-4' style={{color:'#888888'}}>Full Name</p>
                   <p className='col-6'>{selected.name}</p>
                </div>
                <div className='row detailitem'>
                   <p className='col-4' style={{color:'#888888'}}>Email</p>
                   <p className='col-6'>{selected.email}</p>
                </div>
                <div className='row detailitem'>
                   <p className='col-4' style={{color:'#888888'}}>Phone No</p>
                   <p className='col-6'>{selected.phoneno}</p>
                </div>
                <div className='row detailitem'>
                   <p className='col-4' style={{color:'#888888'}}>Company</p>
                   <p className='col-6'>{selected.company}</p>
                </div>
                <div className='row detailitem'>
                   <p className='col-4' style={{color:'#888888'}}>Address</p>
                   <p className='col-6'>{selected.address}</p>
                </div>
                
            </div>
            
        </div>
        :null
    )
}

export default DetailCard
