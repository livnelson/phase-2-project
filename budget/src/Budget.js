import React, { useContext } from 'react';
import { AppContext } from './AppContext';


const Budget = ({monthlyBudget}) => {
    
    const { budget } = useContext(AppContext)

    // const [Value, setValue] = useState("");
    // const [EditMode, setEditMode] = useState(false);
    
	// const toggleEditMode = () => setEditMode(!EditMode);
    
	// const editBudget = () => {
    //     console.log('hi')
    //     return EditMode ? (
    //     <div>
    //         <input
    //         type="number"
    //         value={Value}
    //         onChange={(e) => setValue(e.target.value)}
    //         onBlur={toggleEditMode}
    //         />
    //     </div>
    //     ) : ( 
    //         (console.log('test'))
    //     //  <span onClick={toggleEditMode}>{Value}</span>
    //      );
    //     }
    
    return (
        <div  className='alert alert-secondary'>
            <span>Budget: ${monthlyBudget}</span>
            {/* <TiEdit size='1.2em' style={{ margin: 5 }} onClick={editBudget}></TiEdit> */}
        </div>
        
    )
}

export default Budget;