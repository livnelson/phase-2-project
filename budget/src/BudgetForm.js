import React from 'react'

const budgetForm = ({monthlyBudget, setMonthlyBudget}) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        setMonthlyBudget(e.target.value)
    }
    return (
        <div className="budget-form">
            <h2>Add Montly Income</h2>
            <form>
                <label>$</label>
                <input type="number" required onChange={handleChange} value={monthlyBudget}></input>
            </form>
            <p>
                The My Budget Planner application is meant to help the user create a monthly budget plan by entering in their individual expenses 
            </p>
        </div>
    )
}

export default budgetForm