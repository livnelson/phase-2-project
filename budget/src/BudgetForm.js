import React from 'react'

const budgetForm = ({monthlyBudget, setMonthlyBudget}) => {

    const handleChange = (e) => {
        console.log('hi', e.target.value)
        setMonthlyBudget(e.target.value)
    }
    return (
      <div id="budget-form" className="budget-form">
        <label>
          <h5>Add Montly Income: $ </h5>
        </label>
        <form>
          <input type="number" style={{ margin: 5 }} required value={monthlyBudget} />
          <input onSubmit={handleChange} type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default budgetForm