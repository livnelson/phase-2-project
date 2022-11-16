import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Expenses from './Expenses';
import CreateBudget from './CreateBudget';
import { AppProvider } from "./AppContext.js"
import { Switch, Route } from "react-router-dom"
import BudgetForm from './BudgetForm'

import "./global.css"
import Menu from "./Menu"

const App = () => {
 

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
				<Home />
			</Route>
		</Switch>
		</AppProvider>
	  </div>
	);

};

export default App;