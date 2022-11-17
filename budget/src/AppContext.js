import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};


const initialState = {
    budget: 10000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 100 },
        { id: 14, name: 'meals', cost: 25 },
        { id: 15, name: 'health', cost: 300 },
        { id: 16, name: 'expenses', cost: 75 },
        { id: 17, name: 'shopping', cost: 60 },
    ]
}

//filter => new array for updated state to show new budget

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}