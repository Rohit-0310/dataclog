// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Login"} element={<Login />} />
                <Route path={"/Registration"} element={<Registration />} />
                <Route path={"/UserDetails"} element={<UserDetails />} />
            </Routes>
           
        </div>
    );
}

export default App;
