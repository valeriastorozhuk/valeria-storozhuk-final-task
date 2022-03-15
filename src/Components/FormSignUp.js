import React from 'react'
import useForm from './useForm'
import validate from "./validateInfo"

const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate)

  return (
      <div className="form box">
          <form className="form" onSubmit={handleSubmit}>
                <h1 className="header-menu  mb-5 text-center">Get started with me today! <br/><br/>Create your account by filling out the information below:</h1>
                <div className="form-inputs row mb-2">
                    <label htmlFor="username" className="form-label col text-end">
                        Username: &nbsp; &nbsp; &nbsp;
                    </label>
                    <input 
                        id="username" 
                        type="text" 
                        name="username" 
                        className="form-input col" 
                        placeholder="Enter your username" 
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p className='errMsg'>{errors.username}</p>}
                </div>
                <div className="form-inputs row mb-2">
                    <label htmlFor="email" className="form-label col text-end">
                        Email: &nbsp; &nbsp; &nbsp;
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        className="form-input col" 
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className='errMsg'>{errors.email}</p>}
                </div>
                <div className="form-inputs row mb-2">
                    <label htmlFor="password" className="form-label col text-end">
                        Password: &nbsp; &nbsp; &nbsp;
                    </label> 
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        className="form-input col" 
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p className='errMsg'>{errors.password}</p>}
                </div>
                <div className="form-inputs row mb-4">
                    <label htmlFor="password2" className="form-label col text-end">
                        Re-enter the password: &nbsp; &nbsp; &nbsp;
                    </label>
                    <input 
                        id="password2" 
                        type="password" 
                        name="password2" 
                        className="form-input col" 
                        placeholder="Re-enter your password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p className='errMsg'>{errors.password2}</p>}
                </div>
                <div className="form-input-login text-center mb-2">Already have an account? Login <a href="#">here</a></div>
                <button className="form-input-btn reg cart" typr="submit">Register</button>
          </form>
      </div>
  )
}

export default FormSignUp