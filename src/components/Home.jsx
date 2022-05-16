import React from 'react'
import NavBar from './NavBar'
import './style.css'

const Home = () => {

    function createData(eid, fname, lname,email, add, dep) {
        return { eid, fname, lname,email, add, dep };
      }
      
      const employeesdata = [
        createData(1,'Roberta','Saphin','rsaphin0@blogger.com','Rychwał','Toys'),
        createData(2,'Ernie','Servant','eservant1@imgur.com','Dukuhbadag','Movies'),
        createData(3,'Ursula','Elkington','uelkington2@csmonitor.com','Malhão','Baby'),
        createData(4,'Seth','Boffin','sboffin3@mapy.cz','Padova','Clothing'),
        createData(5,'Myrtia','Littlewood','mlittlewood4@nymag.com','Žlutice','Automotive'),
        createData(6,'Katrinka','Konerding','kkonerding5@ca.gov','Daba','Movies'),
        createData(7,'Myles','Daintith','mdaintith6@paginegialle.it','Denver','Tools'),
        createData(8,'Maximilian','Shields','moshields7@toplist.cz','Boguchwała','Home'),
        createData(9,'Candide','Snook','csnook8@ucla.edu','Cicurug','Kids'),
        createData(10,'Gris','Rubinivitz','grubinivitz9@vinaora.com','Padangan','Books'),
        createData(11,'Tyler','Sodeau','tsodeaua@lulu.com','Yanglong','Sports'),
        createData(12,'Wenonah','Frome','wfromeb@china.com.cn','Rayevskiy','Home'),
        createData(13,'Elysia','Carville','ecarvillec@booking.com','Pérama','Electronics'),
        createData(14,'Morgen','Laux','mlauxd@time.com','Chachagüí','Automotive'),
        createData(15,'Bibby','McGaughay','bmcgaughaye@deviantart.com','Karangpaningal','Toys'),
        createData(16,'Bent','Inkles','binklesf@go.com','Zhangjiabao','Grocery'),
        createData(17,'Cammi','Cheeld','ccheeldg@businesswire.com','Kremenki','Tools'),
        createData(18,'Frances','Agiolfinger','fagiolfingerh@dot.gov','Dietaisi','Garden'),
        createData(19,'Perren','Crysell','pcryselli@answers.com','Bureng','Books'),
        createData(20,'Adoree','Penswick','apenswickj@blog.com','Louny','Clothing')
      ];
    return (
      <div>
          <NavBar />
        <div className='main-container'>
          <h1>Employee Details</h1>
            <table className="table">
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Department</th>
                </tr>
                {employeesdata.map((e) =>(
                    <tr key={e.eid}>

                        <td>{e.eid}</td>
                        <td>{e.fname}</td>
                        <td>{e.lname}</td>
                        <td>{e.email}</td>
                        <td>{e.add}</td>
                        <td>{e.dep}</td>
                        
                    </tr>
                ))}


                {/* <tr>
                    <td>2</td>
                    <td>Maria</td>
                    <td>Anders</td>
                    <td>a@a.com</td>
                    <td>Mexico</td>
                    <td>IT</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Maria</td>
                    <td>Anders</td>
                    <td>a@a.com</td>
                    <td>Mexico</td>
                    <td>IT</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Maria</td>
                    <td>Anders</td>
                    <td>a@a.com</td>
                    <td>Mexico</td>
                    <td>IT</td>
                </tr> */}
            </table>

        </div>
      </div>
    )
}

export default Home