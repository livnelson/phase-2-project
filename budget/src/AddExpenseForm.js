import React from 'react'
import "./form.css"

function AddExpenseForm() {
  return (
    <form>
        <div classname="row">
            <div className="col-sm">
                <label for="name"></label>
                <input
                    id="name-input"
                    placeholder="Name"
                    required="required"
                    type="text"
                    className="form-control"
                    is="name"
                ></input>
            </div>
            <div className="col-sm">
                <label for="cost"></label>
                <input
                    id="cost-input"
                    placeholder="Cost"
                    required="required"
                    type="text"
                    className="form-control"
                    is="cost"
                ></input>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                {/* <button type="submit" className="btn btn-primary mt-3"> */}
                <button type="submit" className="expense-btn">
                    Save
                </button>
            </div>
        </div>
    </form>
    
  )
}

export default AddExpenseForm