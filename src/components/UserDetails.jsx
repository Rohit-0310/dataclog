import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import "./style.css"
const UserDetails = () => {

  const [user,setUser] =useState([]);

  const getData = () =>{
    fetch(`https://reqres.in/api/users`)
      .then((data) =>data.json())
      .then((res)=>{setUser(res.data)})
      
  }


  useEffect (()=>{
    getData()
  },[])

  console.log(user)
  // console.log(user.data)


  return (
    <div>
  <NavBar />
    <div className="top">
    <div class="main">
      
      <div>
        <h1>Heading</h1>
        <h3>Sub Heading</h3>
      </div>
      <div className='card'>
      {
        user.map((e)=>(
          <div  key={e.id}>
              
                <img src={e.avatar} alt={e.first_name} />
                <p>First Name- {e.first_name}</p>
                <p>Email- {e.email}</p>
              

          </div>
        ))
      }
      </div>
      </div>
  </div>
    </div>
  )
}

export default UserDetails