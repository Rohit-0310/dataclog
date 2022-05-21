import React, { useState } from 'react'
import NavBar from './NavBar'
import './style.css'
const data = [{
    "eid": 1,
    "fname": "Tadio",
    "lname": "Whellams",
    "email": "twhellams0@hao123.com",
    "add": "Shangcunba",
    "dep": "Outdoors"
  }, {
    "eid": 2,
    "fname": "Anna",
    "lname": "Rabbitts",
    "email": "arabbitts1@hud.gov",
    "add": "Benešov nad Černou",
    "dep": "Toys"
  }, {
    "eid": 3,
    "fname": "Stavros",
    "lname": "Frayling",
    "email": "sfrayling2@hibu.com",
    "add": "Maroa",
    "dep": "Games"
  }, {
    "eid": 4,
    "fname": "Launce",
    "lname": "Thompson",
    "email": "lthompson3@businessweek.com",
    "add": "Banes",
    "dep": "Electronics"
  }, {
    "eid": 5,
    "fname": "Karly",
    "lname": "Locock",
    "email": "klocock4@feedburner.com",
    "add": "Talin Hiag",
    "dep": "Garden"
  }, {
    "eid": 6,
    "fname": "Deane",
    "lname": "Dedon",
    "email": "ddedon5@mayoclinic.com",
    "add": "Zhengyangshan",
    "dep": "Outdoors"
  }, {
    "eid": 7,
    "fname": "Bucky",
    "lname": "Missenden",
    "email": "bmissenden6@godaddy.com",
    "add": "Apeldoorn",
    "dep": "Grocery"
  }, {
    "eid": 8,
    "fname": "Brear",
    "lname": "Oleszczak",
    "email": "boleszczak7@smh.com.au",
    "add": "Lazaro Cardenas",
    "dep": "Books"
  }, {
    "eid": 9,
    "fname": "Kippie",
    "lname": "Springham",
    "email": "kspringham8@yellowpages.com",
    "add": "Nantes",
    "dep": "Kids"
  }, {
    "eid": 10,
    "fname": "Ruby",
    "lname": "Wadworth",
    "email": "rwadworth9@amazon.com",
    "add": "Itzig",
    "dep": "Kids"
  }, {
    "eid": 11,
    "fname": "Jacky",
    "lname": "Corbyn",
    "email": "jcorbyna@mediafire.com",
    "add": "Nogoonnuur",
    "dep": "Outdoors"
  }, {
    "eid": 12,
    "fname": "Rheta",
    "lname": "Lempenny",
    "email": "rlempennyb@washington.edu",
    "add": "Zaragoza",
    "dep": "Computers"
  }, {
    "eid": 13,
    "fname": "Gianina",
    "lname": "O'Cullinane",
    "email": "gocullinanec@surveymonkey.com",
    "add": "Yên Lạc",
    "dep": "Electronics"
  }, {
    "eid": 14,
    "fname": "Georgine",
    "lname": "Berget",
    "email": "gbergetd@ocn.ne.jp",
    "add": "São Joaquim da Barra",
    "dep": "Books"
  }, {
    "eid": 15,
    "fname": "Veronica",
    "lname": "St Clair",
    "email": "vstclaire@google.it",
    "add": "Takāb",
    "dep": "Music"
  }, {
    "eid": 16,
    "fname": "Mignon",
    "lname": "Hens",
    "email": "mhensf@goodreads.com",
    "add": "Venda Nova",
    "dep": "Beauty"
  }, {
    "eid": 17,
    "fname": "Friederike",
    "lname": "Maith",
    "email": "fmaithg@state.tx.us",
    "add": "Adolfo Lopez Mateos",
    "dep": "Jewelry"
  }, {
    "eid": 18,
    "fname": "Dion",
    "lname": "Cornau",
    "email": "dcornauh@free.fr",
    "add": "Pecatu",
    "dep": "Movies"
  }, {
    "eid": 19,
    "fname": "Felicdad",
    "lname": "O'Mannion",
    "email": "fomannioni@berkeley.edu",
    "add": "Yinxi",
    "dep": "Movies"
  }, {
    "eid": 20,
    "fname": "Maren",
    "lname": "Hauxley",
    "email": "mhauxleyj@paypal.com",
    "add": "Niños Heroes",
    "dep": "Books"
  }]
const Home = () => {

    const [poup, setPoup] = useState(false);
    const [filterdata, setFilterData] = useState('');


    const handlePoup = (id) => {
        setPoup(poup?false:true);
        console.log(id)
        let temp = data.filter((currElement)=>{
            return +currElement.eid === +id;
        })
        setFilterData(temp)
    
        console.log(temp)
    }

    console.log("filter",filterdata)
    
      
      
 
    return (
      <div>
          <NavBar />
        <div className='main-container'>
          <h1>Employee Details</h1>
            <table className="table">
                <tr>
                    <th>Employee Id</th>
                    <th >First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Department</th>
                </tr>
                {data.map((e) =>(
                    <tr key={e.eid} onClick={()=>handlePoup(e.eid)}  >

                        <td>{e.eid}</td>
                        <td>{e.fname}</td>
                        <td>{e.lname}</td>
                        <td>{e.email}</td>
                        <td>{e.add}</td>
                        <td>{e.dep}</td>
                        
                    </tr>
                ))}
            </table>

            <div className="poup_style" style={{display:poup?"block":"none"}}>
                <div className="popud_div">
                    
                    <label><b>Employee Id:-</b></label> <span>{filterdata && filterdata[0].eid}</span> <br/> <br/>
                    <label><b>First Name:-</b></label> <span>{filterdata && filterdata[0].fname}</span>  <br/> <br/>
                    <label><b>Last Name:-</b></label> <span>{filterdata && filterdata[0].lname}</span> <br/> <br/>
                    <label><b>Email:-</b></label> <span>{filterdata && filterdata[0].email}</span> <br/> <br/>
                    <label><b>Address:-</b></label> <span>{filterdata && filterdata[0].add}</span> <br/> <br/>
                    <label><b>Department:-</b></label> <span>{filterdata && filterdata[0].dep}</span> <br/> <br/>
                </div>
            </div>

        </div>
      </div>
    )
}

export default Home

