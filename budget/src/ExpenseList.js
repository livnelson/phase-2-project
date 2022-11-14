import React from 'react';
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        { id: 12, name: 'shopping', cost: 40},
        { id: 13, name: 'holiday', cost: 100},
        { id: 14, name: 'meals', cost: 25},
        { id: 15, name: 'health', cost: 300},
        { id: 16, name: 'expenses', cost: 75},
        { id: 17, name: 'shopping', cost: 60},
    ];
    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;