import React from 'react'
import AddExpenseForm from './AddExpenseForm'


function AddExpense() {
  return (
    <div className="container">
        <div className='row mt-3'>
            <div className='col-sm'>
                <AddExpenseForm />
            </div>
        </div>
    </div>
  )
}

export default AddExpense