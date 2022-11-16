import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Remaining = ({monthlyBudget}) => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: ${monthlyBudget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;