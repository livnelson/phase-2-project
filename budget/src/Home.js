import React, { useState } from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";

function Home({ monthlyBudget, setMonthlyBudget, incomeAmount, setIncomeAmount}) {
  return (
    <div className="container">
      <div id="app-intro">
        <h5>
          <em>Managing money, made easy</em>
        </h5>
        <p>
          The My Budget Planner application is meant to help the user create a
          monthly budget plan by entering in their individual expenses{" "}
        </p>
        <div className="container">
          <h3>Your Budget at a Glance</h3>
          <div className="row mt-3">
            <div id="budget-col" className="col-sm">
              <Budget
                monthlyBudget={monthlyBudget}
                setMonthlyBudget={setMonthlyBudget}
              />
            </div>
            <div id="expense-col" className="col-sm">
              <ExpenseTotal />
            </div>
            <div id="remaining-col" className="col-sm">
              <Remaining
                monthlyBudget={monthlyBudget}
                setMonthlyBudget={setMonthlyBudget}
                incomeAmount={incomeAmount}
                setIncomeAmount={setIncomeAmount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
 