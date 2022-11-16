import React from 'react'

const budgetForm = ({monthlyBudget, setMonthlyBudget}) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        setMonthlyBudget(e.target.value)
    }
    return (
        <div id="budget-form" className="budget-form">
            <form>
              <label>
                Add Montly Income: $ 
                <input type="number" style={{ margin: 5 }} required onChange={handleChange} value={monthlyBudget} />
              </label>
              <input type="submit" value="Submit" />
            </form>
       </div>
    )
}

export default budgetForm