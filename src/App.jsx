// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Login"} element={<Login />} />
                <Route path={"/Registration"} element={<Registration />} />
            </Routes>
        </div>
    );
}

export default App;
