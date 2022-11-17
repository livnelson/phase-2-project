import React, {useState, useEffect} from 'react';
import ExpenseItem from './ExpenseItem'
import { AppContext } from './AppContext';

const ExpenseList = () => {
    // const {expenses} = useContext(AppContext)

    const [expenses, setExpenses] = useState([])
	const expensesArray = useEffect(() =>
    {fetch('http://localhost:8000/expenses')
			.then((res) => res.json())
			.then(expensesData => setExpenses(expensesData))}, [])

    const mappedExpenses = expenses.map((expense) => (
        <ExpenseItem 
            key={expense.id} 
            id={expense.id}
            name={expense.name} 
            cost={expense.cost}
        />
    ))

    return (
        <ul className='list-group'>
            {mappedExpenses}
        </ul>
    )
}

export default ExpenseList;