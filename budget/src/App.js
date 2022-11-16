import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm'
import { AppProvider } from "./AppContext.js"

import "./global.css"
import Menu from "./Menu"

const App = () => {

	function handleEdit(expenses) {
        const updatedExpenses = expenses.filter((expense) => 
            expense.id === expenses.id ? updatedExpenses : expense
        )
       console.log("testing edit")
    }

	return (
		<AppProvider>
		<Menu />
		<div className='container'>
			<div className='row mt-3'>
				<div id="budget-col" className='col-sm'>
					<Budget />
				</div>
				<div id="remaining-col"className='col-sm'>
					<Remaining />
				</div>
				<div id="expense-col"className='col-sm'>
					<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList handleEdit={handleEdit}/>
					</div>
				</div>
				<br />
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm handleEdit={handleEdit}/>
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;