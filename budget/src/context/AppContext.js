import { createContext } from "react"

const initialState = {
    budget: 10000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40},
        { id: 13, name: 'holiday', cost: 100},
        { id: 14, name: 'meals', cost: 25},
        { id: 15, name: 'health', cost: 300},
        { id: 16, name: 'expenses', cost: 75},
        { id: 17, name: 'shopping', cost: 60},
    ]
}

export const AppContext = createContext();