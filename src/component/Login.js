import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import './signup.css'
import { TiEye } from 'react-icons/ti';
import axios from "axios";  
const Login = () => {
   const details = {
    
     email: "",
     password: "",
    
   };
   
   const [showpassword,setShowPassword]=useState('password')
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
 
   const [success, setSuccess] = useState();
  
   const emailRef = useRef("");
   const passwordRef = useRef("");
  
   const removeErrorMessage = () => {
     const removeTime = setTimeout(() => {
       setEmailError("");
       setPasswordError("");
       setSuccess("");
     }, 2000);
     return () => {
       clearTimeout(removeTime);
     };
   };
   const registerSubmitHandler = async(e) => {
     e.preventDefault();
    
     let email = emailRef.current.value;
     let password = passwordRef.current.value;
    
    
     if (email === "" || email === null) {
       setEmailError("Enter your email");
       removeErrorMessage();
     }
     if (password === "" || password === null) {
       setPasswordError("Enter your password");
       removeErrorMessage();
     }
    
     if (
       email !== "" &&
       
       password !== ""
      
     ) {
       let data = {
         ...details,
         email: email,
         password: password,
        
       };
       
       console.log(data);
       await axios
         .post("http://localhost:5000/api/v1/login", data, {
           headers: {
             "Content-Type": "application/json",
           },
         })
         .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
           console.log(error);
         });
       setSuccess("success");
       removeErrorMessage();
      //  e.target.reset();
     }
  };
  const showPasswordHandler = () => {
    let show = passwordRef.current.type
    if (show === 'password') {
      let newshow=setShowPassword('text')
      show=newshow
    }
    else {
      let newshow2=setShowPassword('password')
      show=newshow2
    }
  }
  return (
    <div className="container">
      <Navbar />
      <section className="signupSection">
        <h2 className="accounttxt">Create an Account</h2>
        <article>
          <form className="form" onSubmit={registerSubmitHandler}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input"
            />
            <small className="error">{emailError}</small>
            <div className="input passdiv">
              <input
                ref={passwordRef}
                className="password"
                type={showpassword}
                placeholder="Password"
              />
                <TiEye className='eye' onClick={()=>showPasswordHandler()}/>
              
            </div>

            <small className="error">{passwordError}</small>

            <p className="accounttxt">
              create an account?{" "}
              <span>
                <Link to="/signup" className="log">
                  sign up
                </Link>
              </span>
            </p>
            <p>
              <Link className="log">forgotten password?</Link>
            </p>
            <small className="success">{success}</small>
            <button className="btn continue">Continue</button>
          </form>
        </article>
      </section>
    </div>
  );
}

export default Login