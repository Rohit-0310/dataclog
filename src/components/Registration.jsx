import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import "./style.css"


const Registration = () => {


    const navigate = useNavigate()
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = () => {
        localStorage.setItem('FirstName', fname);
        localStorage.setItem('LastName', lname);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        localStorage.setItem('Address', address);
        localStorage.setItem('Department', department);
        console.log("Data saved in LocalStorage")
        alert('Registration Successfull')
        navigate("/Login")
    }
// console.log(handleSubmit())
    // const [inpdata, setInpdata] = useState({
    //     firstName:"",lastName:"",email:"",password:"",address:"",department:"IT"
    // })


    // const getData = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setInpdata({...inpdata,[name]:value});

    //     console.log(inpdata)
        
    // }

    // const handleInputChange = (e) =>{
    //     let {name, value} = e.target;
    //     setInpdata({...inpdata, [name]: value})
    //     console.log(inpdata.name)
    // }

    // const handleRegistration = () => {
    //     // localStorage.setItem(inpdata)
    //  };
     

    //  const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleRegistration()
        
    // }

return (
    <div>
        <NavBar />
        <form >
            <div className="fotm_main">
                <h2>Registration</h2>
                
                <div className='InputBox_name'>
                    <div className='InputBox'>
                        <label><b>First Name</b></label> <br />
                        <input   onChange={(e) => setFname(e.target.value)} value={fname} name="firstName" type="text" placeholder="Enter Your First Name" required />
                    </div>

                    <div className='InputBox'>
                        <label><b>Last Name</b></label> <br />
                        <input   onChange={(e) => setLname(e.target.value)} value={lname} name="lastName" type="text" placeholder="Enter Your Last Name" />
                    </div>

                </div>

                <div className='InputBox'>
                    <label ><b>Email</b></label> <br />
                    <input   onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="text" placeholder="Enter Your Email Id" required />
                </div>

                <div className='InputBox'>
                    <label ><b>Password</b></label> <br />
                    <input   onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Enter Your Password" required />
                </div>

                <div className='InputBox'>
                    <label ><b>Address</b></label> <br />
                    <input   onChange={(e) => setAddress(e.target.value)} value={address} name="address" type="text" placeholder="Enter Your Address" required />
                </div>


                <div className='InputBox'>
                    <label ><b>Department</b></label> <br />
                    <input   onChange={(e) => setDepartment(e.target.value)} value={department} name="department" type="text" placeholder="Enter Department Name" required />
                </div>


                <button className="btn" type="submit" onClick={handleSubmit} ><b>Register</b></button>
                
            </div>
          </form>
        
    </div>
    )
}

export default Registration