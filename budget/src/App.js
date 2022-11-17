import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Expenses from './Expenses';
import CreateBudget from './CreateBudget';
import { AppProvider } from "./AppContext.js"
import { Switch, Route } from "react-router-dom"

import "./global.css"
import Menu from "./Menu"

const App = () => {
	const [incomeAmount, setIncomeAmount] = useState([])
	const [monthlyBudget, setMonthlyBudget] = useState("10000")
	const [money, setMoney] = useState([])

	useEffect(() => { 
		fetch('http://localhost:8000/budget')
		.then((res) => res.json())
		.then(budgetData => {
			console.log(budgetData)
			setMoney(budgetData)
		})
	},[])

	

	return (
	  <div>
		<AppProvider>
		<Menu />
		<Switch>
			<Route path="/Expenses">
				<Expenses />
			</Route>
			<Route path="/CreateBudget">
				<CreateBudget />
			</Route>
			<Route  path="/">
				<Home 
				incomeAmount={incomeAmount}
				setIncomeAmount={setIncomeAmount}
				monthlyBudget={monthlyBudget} 
				setMonthlyBudget={setMonthlyBudget}
				/>
			</Route>
		</Switch>
		</AppProvider>
	  </div>
	);

};

export default App;