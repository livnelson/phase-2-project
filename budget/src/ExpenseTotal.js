import React, {useContext} from 'react';
import { AppContext } from './context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext)
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    })
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: $9,000</span>
        </div>
    )
}

export default ExpenseTotal;