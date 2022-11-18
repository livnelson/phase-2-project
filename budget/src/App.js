import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Expenses from "./Expenses";
import CreateBudget from "./CreateBudget";
import { AppProvider } from "./AppContext.js";
import { Switch, Route } from "react-router-dom";

import "./global.css";
import Menu from "./Menu";

const App = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  	const onSetExpenses = (newExpense) => {
		setExpenses([...expenses, newExpense])
	}

  useEffect(() => {
    fetch("http://localhost:8000/income")
      .then((res) => res.json())
      .then((incomeData) => {
        console.log(incomeData);
        setIncome(incomeData);
      });
  }, []);

  const mappedIncome = income.map((i) => {
    return i.money;
  });

  return (
    <div>
      <AppProvider>
        <Menu />
        <Switch>
          <Route path="/Expenses">
            <Expenses />
          </Route>
          <Route path="/CreateBudget">
            <CreateBudget income={income} setIncome={setIncome} mappedIncome={mappedIncome} onSetExpenses={onSetExpenses}/>
          </Route>
          <Route path="/">
            <Home income={income} setIncome={setIncome} mappedIncome={mappedIncome}/>
          </Route>
        </Switch>
      </AppProvider>
    </div>
  );
};

export default App;
