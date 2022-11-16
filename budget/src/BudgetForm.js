import React from 'react'

const budgetForm = ({monthlyBudget, setMonthlyBudget}) => {

    const handleChange = (e) => {
        console.log('hi', e.target.value)
        setMonthlyBudget(e.target.value)
    }
    return (
        <div id="budget-form" className="budget-form">
            <form>
              <label>
                Add Montly Income: $ 
                <input type="number" style={{ margin: 5 }} required value={monthlyBudget} />
              </label>
              <input onSubmit={handleChange} type="submit" value="Submit" />
            </form>
       </div>
    )
}

export default budgetForm