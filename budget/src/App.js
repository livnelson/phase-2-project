import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm'
import {AppProvider} from './AppContext';

import "./global.css"
import Header from "./Header"

const App = () => {

	
	
	return (
		<AppProvider>

		<div className='container'>
			<Header />
			
			<div className='row mt-3'>
				<div id="budget-col" className='col-sm'>
					<Budget />
				</div>
				<div id="remaining-col"className='col-sm'>
					<Remaining />
				</div>
				<div id="expense-col"className='col-sm'>
					<ExpenseTotal />

			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div id="budget-col" className='col-sm'>
						<Budget />
					</div>
					<div id="remaining-col" className='col-sm'>
						<Remaining />
					</div>
					<div id="expense-col" className='col-sm'>
						<ExpenseTotal />

					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<br />
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;