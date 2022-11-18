import React, { useState } from 'react'

const BudgetForm = ({income, setIncome, mappedIncome}) => {
  const [newIncome, setNewIncome] = useState(0)

  const handleChange = (e) => {
    setNewIncome(e.target.valueAsNumber)
    // console.log(e.target.value)
    console.log(newIncome)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    // debugger

    const configBudget = {
    	method: "PATCH",
    	  headers: {
    		"Content-Type": "application/json",
    		"Accept": "application/json",
    	  },
    	  body: JSON.stringify({money: newIncome}),
      }

      fetch(`http://localhost:8000/income/1`, configBudget)
      .then((res) => res.json())
      .then((data) => {
        console.log("Im the Budget Form", data);
        console.log(income)
        // [...spreadIncome, data]
        const spreadIncome = income.map((i) => {
          if (i.id === data.id) {
            return data
          } else return i
        })
        setIncome(spreadIncome)
     
      })
    };

    return (
      <div id="budget-form" className="budget-form">
        <label>
          <h5>Add Montly Income: $ </h5>
        </label>
        <form onSubmit={handleSubmit} >
          <input type="number" style={{ margin: 5 }} required value={newIncome} onChange={handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default BudgetForm