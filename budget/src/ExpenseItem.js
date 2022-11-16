import React, { useContext } from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { AppContext } from './AppContext';

const ExpenseItem = (props, {handleEdit}) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};


	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name} 
			<div>
				<span style={{ padding: 20 }} >
					${props.cost}
				</span>
				{/* <TiEdit size='1.5em' onClick={handleEdit}></TiEdit> */}
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;