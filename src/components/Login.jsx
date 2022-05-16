import React from 'react'
import NavBar from './NavBar'
import "./style.css"
const Login = () => {
    return (
        <div>
          <NavBar />
          <form>
            <div className="fotm_main">
                <h2>Login</h2>

                <div className='InputBox'>
                    <label for="email"><b>UserName / Email</b></label> <br />
                    <input type="text" placeholder="Enter Your UserName / Email" required />
                </div>


                <div className='InputBox'>
                    <label for="password"><b>Password</b></label> <br />
                    <input type="password" placeholder="Enter Your Password" required />
                </div>
                <input type="checkbox" name="remember" required/>
                <label> Remember me</label>

                <button className="btn"type="submit" ><b>Login</b></button>
                
            </div>
          </form>
        

        </div>
    )
}

export default Login