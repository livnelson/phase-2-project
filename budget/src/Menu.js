import React from 'react'
import './menu.css'
import { NavLink } from "react-router-dom"
// import { TiHome } from 'react-icons/ti';

function Menu() {

  return (
    <div id="header">
        {/* <TiHome size='1.5em'></TiHome> */}
        <h1>My Budget Planner</h1>
        <NavLink  to="/Home"><button>Home</button></NavLink>
        <NavLink  to="/Expenses"><button>View Expenses</button></NavLink>
        <NavLink  to="/CreateBudget"><button>Create Budget</button></NavLink>
    </div>
  )
}

export default Menu