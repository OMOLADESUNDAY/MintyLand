
        
        import React, { useRef,useState } from 'react'
        import {useNavigate } from 'react-router-dom';
        import Navbar from './Navbar'
        import axios from 'axios'
        
        import './signup.css'
        import { toast } from 'react-toastify';
        import { getError } from './utils';
        const Signup = () => {
          const navigate=useNavigate()
          
           const [nameError, setNameError] = useState("");
           const [no_of_reviewError, setNo_of_reviewError] = useState();
           const [countInStoreError, setCountInStoreError] = useState();
          const [categoryError, setCategoryError] = useState("");
          const [ratingError, setRatingError] = useState();
          const [priceError, setPriceError] = useState();
          const [descriptionError, setDescriptionError] = useState("");
         const [imageError, setImageError] = useState("");
          const [success, setSuccess] = useState();
          const nameRef = useRef();
          const priceRef = useRef();
          const descriptionRef = useRef();
          const categoryRef = useRef();
          const no_of_reviewRef = useRef();
          const countInStockRef = useRef();
          const imageRef = useRef();
          const ratingRef = useRef();
           const removeErrorMessage = () => {
             const removeTime = setTimeout(() => {
               setNameError('')
               setImageError('')
               setDescriptionError('')
               setCountInStoreError('')
               setNo_of_reviewError('')
               setPriceError('')
               setCategoryError('')
               setRatingError('')
               setSuccess('')
             }, 2000);
             return () => {
               clearTimeout(removeTime);
             };
           };
          const registerSubmitHandler = async(e) => {
            console.log(e)
            e.preventDefault();
            let name = nameRef.current.value
            let no_of_review = no_of_reviewRef.current.value
            let countInStock = countInStockRef.current.value
            let rating=ratingRef.current.value
            let category = categoryRef.current.value
            let image =imageRef.current.files[0]
            let description = descriptionRef.current.value
            let price=priceRef.current.value
            if (name === ""|| name === null) {
              setNameError('Enter Product Name')
              removeErrorMessage()
            }
            if (
               no_of_review=== "" ||
               no_of_review === null
            ) {
              setNo_of_reviewError("Enter product no of reviews");
              removeErrorMessage();
            }
            if (
              countInStock === "" ||
              countInStock === null
            ) {
              setCountInStoreError("Enter product number in stock ");
              removeErrorMessage();
            }

            if (
              rating === "" ||
              rating === null
            ) {
              setRatingError("Enter Product rating");
              removeErrorMessage();
            }
            if (category ===""|| category===null) {
              setCategoryError('Enter Product category ')
              removeErrorMessage();
            }
            if (image === ""|| name === null) {
              setImageError('insert Product image')
              removeErrorMessage()
            }
            if (
               price=== "" ||
               price === null
            ) {
              setPriceError("Enter product price");
              removeErrorMessage();
            }
            if (
              description === "" ||
              description === null
            ) {
              setDescriptionError("Enter product description ");
              removeErrorMessage();
            }

            if (
              (name !== "") &&
              (rating !== "") &&
              (no_of_review !== "") &&
              (category !== "") &&
              (description !== "") &&
              (price !== "") &&
              (countInStock !== "") &&
              (image !== "")
            ) {
        
      const formData = new FormData();
     formData.append('image', image);
     formData.append('name', name);
     formData.append('rating', rating);
     formData.append('no_of_review', no_of_review);
     formData.append('category', category);
     formData.append('description', description);
     formData.append('price', price);
     formData.append('countInStock', countInStock);
      axios.post('https://cloudy-toad-wig.cyclic.app/api/admin/upload',formData)
      .then((response)=>{
        console.log(response)
        setSuccess('success')
        removeErrorMessage()
        e.target.reset();    
        navigate('/login') 
      })
      .catch((err)=>{
      console.log(err)
      toast.error(getError(err))
      })      
      e.target.reset();
      }}  
      return (
            <div className="container">
              <Navbar />
              <section className="signupSectione">
                <h2 className="accounttxt">Create New Product</h2>
                <article>
                  <form className="form" onSubmit={registerSubmitHandler}>
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="Product Name"
                      className="input"
                    />
                    <small className="error">{nameError}</small>
                    <input
                      ref={no_of_reviewRef}
                      type="number"
                      placeholder="no of reviews"
                      className="input"
                    />
                    <small className="error">{no_of_reviewError}</small>
                    <div className="input passdiv">
                      <input
                        ref={countInStockRef}
                        className="password"
                        type='number'
                        placeholder="number of item in stock"
                      />
                    </div>
                    <small className="error">{countInStoreError}</small>
                    <div className="input passdiv">
                      <input
                        ref={descriptionRef}
                        className="password"
                        type='text'
                        placeholder="description"
                      />
                    </div>
                    <small className="error">{descriptionError}</small>
                    
                    <input
                      ref={ratingRef}
                      type="number"
                      placeholder="rating"
                      className="input"
                    />
                    <small className="error">{ratingError}</small>
                    <div className="input passdiv">
                      <input
                        ref={categoryRef}
                        className="password"
                        type='text'
                        placeholder="category"
                      />
                    </div>
                    <small className="error">{categoryError}</small>
                    <div className="input passdiv">
                      <input
                        ref={priceRef}
                        className="password"
                        type='number'
                        placeholder="price"
                      />
                    </div>
                    <small className="error">{priceError}</small>
                    <input
                      ref={imageRef}
                      type="file"
                      placeholder="image"
                      className="input"
                    />
                    
                    <small className="error">{imageError}</small>
                   
                    <small className="success">{success}</small>
                    <button className="btn continue">Create</button>
                  </form>
                </article>
              </section>
            </div>
          );
        }
        
        export default Signup