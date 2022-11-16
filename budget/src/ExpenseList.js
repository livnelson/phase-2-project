import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem'
import { AppContext } from './AppContext';

const ExpenseList = ({ handleEdit }) => {
    const {expenses} = useContext(AppContext)

    const mappedExpenses = expenses.map((expense) => (
        <ExpenseItem 
            key={expense.id} 
            id={expense.id}
            name={expense.name} 
            cost={expense.cost}
            handleEdit={handleEdit}
        />
    ))

    return (
        <ul className='list-group'>
            {mappedExpenses}
        </ul>
    )
}

export default ExpenseList;