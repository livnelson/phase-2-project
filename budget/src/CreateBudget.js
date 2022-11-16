import React, {useState} from 'react'
import AddExpenseForm from './AddExpenseForm'
import BudgetForm from './BudgetForm'
import Remaining from './Remaining'
import Budget from './Budget'

function CreateBudget({monthlyBudget, setMonthlyBudget}) {
  


  return (
    <div className="container">
       <div className='row mt-3'>
                <div className='col-sm'>

                    <BudgetForm monthlyBudget={monthlyBudget} setMonthlyBudget={setMonthlyBudget}/>
                    <AddExpenseForm />
                    
                 
                </div>
            </div>
    </div>
  )
}

export default CreateBudget