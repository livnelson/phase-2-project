import React from 'react'
import ExpenseList from './ExpenseList';

function Expenses() {

  return (
    <div className="container">
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
            <div className='col-sm'>
                <ExpenseList />
            </div>
        </div>
    </div>
  )
}

export default Expenses