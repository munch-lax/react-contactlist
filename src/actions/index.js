import axios from 'axios'

export const fetchContacts = ()=> async dispatch=>{
    const response = await axios.get('http://localhost:3000/contacts')
    
    dispatch({type:'FETCH_CONTACTS',payload:response.data});

}

export const createContact=(name,email,phoneno,address,company)=> async (dispatch)=>{
    
    var colors=['#82db93','#ff629e','#d9d7d8','#e5e478','#f87f6b','#b46ee8','#76e1f3']
    var number=Math.floor(Math.random() * (6 - 0 + 1)) + 0
    var color=colors[number]
    var data={
        name,
        email,
        phoneno,
        address,
        company,
        color
    }

    
    

    const response = await axios.post('http://localhost:3000/contacts',data)
    
    dispatch({type:'CREATE_',payload:response.data})
    setTimeout(function(){ window.location.reload() }, 500);
    
}

export const editContacts=(id,name,email,phoneno,address,company,color)=> async (dispatch)=>{
    
    var data={
        id,
        name,
        email,
        phoneno,
        address,
        company,
        color,
    }
    
    const response = await axios.put(`http://localhost:3000/contacts/${id}`,data)

    dispatch({type:'EDIT_CONTACTS',payload:response.status})
    console.log("jajsjsjosi")
    setTimeout(function(){ window.location.reload() }, 1000);
    
}
