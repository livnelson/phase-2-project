import React, {useState} from 'react'
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import BudgetForm from './BudgetForm';

function Home() {
  const [monthlyBudget, setMonthlyBudget] = useState('')  

  return (
    <div className='container'>
        <div className='row mt-3'>
            <div id="budget-col" className='col-sm'>
                <Budget monthlyBudget={monthlyBudget} />
            </div>
            <div id="remaining-col"className='col-sm'>
                <Remaining monthlyBudget={monthlyBudget}/>
            </div>
            <div id="expense-col"className='col-sm'>
                <ExpenseTotal />
                </div>
        </div>
        <BudgetForm montlyBudget={monthlyBudget} setMonthlyBudget={setMonthlyBudget}/> 
    </div>
  )
}

export default Home