import React, { useRef,useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import './signup.css'
const Signup = () => {
  const details={username:'',email:'',password:'',confirmPassword:''}
  // const [username, setUsername] = useState('')
  // const [emal, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
   const [usernameError, setUsernameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [success, setSuccess] = useState();
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
   const removeErrorMessage = () => {
     const removeTime = setTimeout(() => {
       setEmailError('')
       setPasswordError('')
       setConfirmPasswordError('')
       setUsernameError('')
     }, 2000);
     return () => {
       clearTimeout(removeTime);
     };
   };
  const registerSubmitHandler = (e) => {
    e.preventDefault()
    let username = usernameRef.current.value
    let email = emailRef.current.value
    let password = passwordRef.current.value
    let confirmPassword=confirmPasswordRef.current.value
    if (username === ""|| username === null) {
      setUsernameError('Enter your username')
      removeErrorMessage()
    }
    if (
      email === "" ||
      email === null
    ) {
      setEmailError("Enter your email");
      removeErrorMessage();
    }
    if (
      password === "" ||
      password === null
    ) {
      setPasswordError("Enter your password");
      removeErrorMessage();
    }
    if (
      confirmPassword === "" ||
      confirmPassword === null
    ) {
      setConfirmPasswordError("Confirm your password");
      removeErrorMessage();
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Password does not match')
      removeErrorMessage();
    }
    if (
      (email !== "") &&
      (username !== "") &&
      (password !== "") &&
      (confirmPassword !== "")
    ) {
      let newDetails={ ...details, email:email, username:username, password:password, confirmPassword:confirmPassword }
      console.log(newDetails)
      setSuccess('success')
      removeErrorMessage()
      e.target.reset();
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
              ref={usernameRef}
              type="text"
              placeholder="Username"
              className="input"
            />
            <small className="error">{usernameError}</small>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input"
            />
            <small className="error">{emailError}</small>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="input"
            />
            <small className="error">{passwordError}</small>
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Passord"
              className="input"
            />
            <small className="error">{confirmPasswordError}</small>
            <p className="accounttxt">
              already have an account?{" "}
              <span>
                <Link to="/login" className="log">
                  log in
                </Link>
              </span>
            </p>
            <button className="btn continue">Continue</button>
            <small className='success'>{success}</small>
          </form>
        </article>
      </section>
    </div>
  );
}

export default Signup