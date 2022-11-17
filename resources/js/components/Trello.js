import React from 'react'
import ReactDOM  from 'react-dom';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import Board from './Board';
import NavBar from './NavBar';
import Header from './Header';
import Register from './Register';
import CreateList from './List/CreateList';
import Activity from './Activity';
import Table from './Table';
import Welcome from './Welcome';



function Trello() {
  return (

    <div>
        <Routes>
            {/* <Route exact path="/" element={ <Trello/> } ></Route> */}
            <Route path='/' element={<Welcome />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/header" element={<Header/>} />
            <Route path="/listts" element={<CreateList/>} />
            <Route path="/board" element={<Board/>} />
            <Route path='/activity' element={ <Activity />} />
            <Route path='/table' element={<Table />} />
            {/* <Route path="*" element={ <h1>Page Not Found</h1>} /> */}
        </Routes>
    </div>
  )
}

// if (document.getElementById('trello')) {
//     ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//           <Trello />
//        </BrowserRouter>
//     </React.StrictMode>
//     , document.getElementById('trello'));
// }
const container = document.getElementById('trello');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Trello/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default  Trello;