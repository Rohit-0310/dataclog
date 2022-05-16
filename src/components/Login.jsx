import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import "./style.css"
const Login = () => {

    const navigate = useNavigate()

    const [lemail, setLemail] = useState("");
    const [lpass, setLpass] = useState("");


    const handleSubmit = () => {
        let getemail = localStorage.getItem('Email')
        let getpass = localStorage.getItem('Password')
        if(getemail === lemail || getpass === lpass){
            alert('Login Successfully')
            navigate("/")
        }
        else{
            alert('Login Unsuccessful')
        }
        console.log(getpass)
        console.log(getemail)
        console.log(lpass)
    }
    return (
        <div>
          <NavBar />
          <form>
            <div className="fotm_main">
                <h2>Login</h2>

                <div className='InputBox'>
                    <label for="email"><b>UserName / Email</b></label> <br />
                    <input   onChange={(e) => setLemail(e.target.value)} value={lemail} name="email" type="text" placeholder="Enter Your UserName / Email Id" required />
                </div>


                <div className='InputBox'>
                    <label for="password"><b>Password</b></label> <br />
                    <input   onChange={(e) => setLpass(e.target.value)} value={lpass} name="password" type="password" placeholder="Enter Your Password" required />
                </div>


                <input type="checkbox" name="remember" required/>
                <label> Remember me</label>

                <button className="btn" type="submit" onClick={handleSubmit} ><b>Login</b></button>
                
            </div>
          </form>
        

        </div>
    )
}

export default Login