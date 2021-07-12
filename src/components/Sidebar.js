import React from 'react'
import './css/Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='margincheck'>
                <li ><i className="fa fa-bars fa-lg" style={{marginTop:10}}></i></li>
                <li style={{marginTop:60}}><i className="fa fa-user fa-lg"></i></li>
                <li><i className="fa fa-home fa-lg"></i></li>
                <li><i className="fa fa-calendar fa-lg"></i></li>
                <li><i className="fa fa-phone fa-lg"></i></li>
                <li><i className="fa fa-spinner fa-lg"></i></li>
                
            </ul>
        </div>
    )
}

export default Sidebar
