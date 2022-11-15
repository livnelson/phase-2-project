import React, {useContext} from 'react';
import { AppContext } from './context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext)
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: $10,000</span>
        </div>
    )
}

export default Budget;