import React from 'react'
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';

function Home() {
    
  return (
    <div className='container'>
        <div className='row mt-3'>
            <div id="budget-col" className='col-sm'>
                <Budget />
            </div>
            <div id="remaining-col"className='col-sm'>
                <Remaining />
            </div>
            <div id="expense-col"className='col-sm'>
                <ExpenseTotal />
                </div>
        </div>
    </div>
  )
}

export default Home