import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <nav className=" navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#8241B8"}} >
            <Link className='navbar-brand text-light' to="/"></Link>
            <Link className='navbar-brand text-light' to="login">Login</Link>
            <Link className='navbar-brand text-light' to="register">Register</Link>
            <Link className='navbar-brand text-light' to="header">Header</Link>
            <Link className='navbar-brand text-light' to="listts" >CreateList</Link>
            <Link className= 'navbar-brand text-light' to="board" >Board</Link>
            <Link className= 'navbar-brand text-light' to="activity" >Activity</Link>
            <Link className='navbar-brand text-light' to="table">Table</Link>
            {/* <Link className= 'navbar-brand text-light' to="sidebar" >SideBar</Link> */}
        </nav>
    </>
  )
}
