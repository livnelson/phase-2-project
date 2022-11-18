import React, { useState, useEffect } from 'react'
import AddExpenseForm from './AddExpenseForm'
import BudgetForm from './BudgetForm'

function CreateBudget({ income, mappedIncome, setIncome }) {

  return (
    <div className="container">
       <div className='row mt-3'>
          <div className='col-sm'>
              <BudgetForm 
                mappedIncome={mappedIncome}
                income={income}
                setIncome={setIncome}
              />
              <AddExpenseForm />
          </div>
        </div>
    </div>
  )
}

export default CreateBudget