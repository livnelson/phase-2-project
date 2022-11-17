import React, {useEffect, useState} from 'react'
import AddExpenseForm from './AddExpenseForm'
import BudgetForm from './BudgetForm'

function CreateBudget({monthlyBudget, setMonthlyBudget}) {
  
  const [incomeAmount, setIncomeAmount] = useState([])


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