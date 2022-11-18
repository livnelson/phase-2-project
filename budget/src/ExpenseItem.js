import React, { useState, useContext } from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { AppContext } from "./AppContext";
import { useHistory } from "react-router-dom";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const [expenses, setExpenses] = useState([]);
  const history = useHistory();

  function onDelete(id) {
    console.log(id);
    const oneLess = expenses.filter((expense) => {
      return expense.id !== id;
    });
    console.log(expenses);
    console.log(oneLess);
    setExpenses(oneLess);
  }

  const handleDeleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });

    fetch(`http://localhost:8000/expenses/` + props.id, {
      method: "DELETE",
    }).then(() => {
      // history.push('/')
      setExpenses();
    });
    onDelete(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span style={{ padding: 20 }}>${props.cost}</span>
        {/* <TiEdit size='1.5em'></TiEdit> */}
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
