import React, { useContext } from 'react';
import { AppContext } from './AppContext';


const Budget = ({ mappedIncome }) => {
    
    const { budget } = useContext(AppContext)

 

    return (
        <div  className='alert alert-secondary'>
            <span>Budget: ${mappedIncome}</span>
            {/* <TiEdit size='1.2em' style={{ margin: 5 }} onClick={editBudget}></TiEdit> */}
        </div>
        
    )
}

export default Budget;