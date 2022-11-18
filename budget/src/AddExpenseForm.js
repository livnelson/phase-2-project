import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { v4 as uuidv4 } from "uuid";
import "./form.css";
import { useHistory } from 'react-router-dom'

const AddExpenseForm = ({ onSetExpenses }) => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory()

  const [name, setName] = useState([]);
  const [cost, setCost] = useState([]);
  // const [newExpense, setNewExpense] = useState("");

  const newList = { name, cost };

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    const configExpenses = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newList),
    };

    fetch(`http://localhost:8000/expenses`, configExpenses)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onSetExpenses(data)
		history.push('/Expenses')
      });
  };

  return (
    <form id="expense-form" onSubmit={onSubmit}>
      {/* <h5 className='mt-3'>Add Expense</h5> */}
      <label>
        <h5>Add Expense</h5>
      </label>
      <div className="row">
        <div className="col-sm">
          {/* <label for='name'></label> */}
          <input
            id="name"
            placeholder="Name"
            required="required"
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <br />
        <div className="col-sm">
          {/* <label for='cost'></label> */}
          <input
            id="cost"
            placeholder="Cost"
            required="required"
            type="number"
            className="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.valueAsNumber)}
          ></input>
        </div>
        <br />
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
