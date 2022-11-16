import React, {useContext, Component} from 'react';
import { AppContext } from './AppContext';
import { TiEdit } from 'react-icons/ti'






const Budget = () => {
    
    const {budget} = useContext(AppContext)
    
    
    return (
        <div  className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <TiEdit size='1.2em' style={{ margin: 5 }}></TiEdit>
        </div>
        
    )
}

export default Budget;

//display initial state and make it editable