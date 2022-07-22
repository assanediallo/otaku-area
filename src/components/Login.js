import '../styles/Login.css'
import { useState, useEffect } from 'react';
import axios from "axios"
export default function Login ({token, setToken}){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [password,setPassword]=useState('');
    const [uname,setUname]=useState('');
    
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    /*const recup = async()=>{
        await axios.post('https://fakestoreapi.com/auth/login')
        .then (res=> {
            console.log(res.userData)
			setData (res.userData)
		})
    }*/


    const handleSubmit = async(event) => {
        event.preventDefault();

        const dataAEnvoyer = {username: uname, password: password}
        const res =
        await axios.post('https://fakestoreapi.com/auth/login', dataAEnvoyer)
        .then(res => {
            console.log(res.data.token)
            setToken(res.data.token)
            setIsSubmitted(true);
        }) 

        //axios.defaults.headers.common['Authorization']= `Bearer ${res.data['token']}`;


    }
    

    


        // Comparer user info

        
        /*if (userData) {
            if (userData.password !== password) {
                setErrorMessages({ name: "pass", message: errors.password });
            } else if (userData.email !== uname) {
                setErrorMessages({ name: "pass", message: errors.password });
            }
            else{
                setIsSubmitted(true);
            }
            
            useEffect(()=>{
        (
            async()=>{
                res
            }
        )
    });
            */

    const renderForm = (
        <div className="form">
        <form>
            <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required onChange={(e)=>setUname(e.target.value)}/>
            {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)} />
            {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
            <input type="submit" onClick={(e)=>handleSubmit(e)}/>
            </div>
        </form>
        </div>
    )

    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ?  <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}