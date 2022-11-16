import React from 'react'
import './menu.css'
import { NavLink } from "react-router-dom"

function Menu() {

  return (
    <div id="header">
        <h1>My Budget Planner</h1>
        <NavLink  to="/Home"><button>Budget</button></NavLink>
        <NavLink  to="/Expenses"><button>Expenses</button></NavLink>
        <NavLink  to="/AddExpense"><button>Add Expense</button></NavLink>
    </div>
  )
}

export default Menu