import React, {useContext} from 'react';
import App from './App';
import { AppContext } from './context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className='alert alert-success'>
            <span>Remaining: $1,000</span>
        </div>
    )
}

export default Remaining;