import { useState } from "react";

export default function Form(){
    let[formData,setFormData]= useState({
        fullName:"",
        userName:"",
        password:"",
    })

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return { ...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor ='fullname'>Full Name</label>
            <input 
            placeholder="enter your full name"  
            type='text' 
            value={formData.fullName}
            id='fullName'
            name='fullName'
            onChange={handleInputChange}>
            </input>
        <br></br>
        <br></br>
            <label htmlFor ='username'>User Name</label>
            <input 
            placeholder="enter user name"  
            type='text' 
            value={formData.userName} 
            id='userName'
            name='userName'
            onChange={handleInputChange}>
            </input>
        <br></br>
        <br></br>
        <label htmlFor ='password'>Password</label>
            <input 
            placeholder="enter password"  
            type='password' 
            value={formData.password} 
            id='password'
            name='password'
            onChange={handleInputChange}>
            </input>
        <br></br>
        <br></br>
            <button>Submit</button>
        </form>
    );
}