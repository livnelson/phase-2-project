import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import BudgetForm from './BudgetForm'

function CreateBudget() {
  return (
    <div className="container">
       <div className='row mt-3'>
                <div className='col-sm'>
                    <BudgetForm />
                    <AddExpenseForm />
                </div>
            </div>
    </div>
  )
}

export default CreateBudget