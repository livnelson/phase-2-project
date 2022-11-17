import {useState, useEffect} from 'react'

const budgetForm = ({monthlyBudget, setMonthlyBudget, incomeAmount, setIncomeAmount}) => {
  
  
  // const incomeArray = () => {
  // useEffect(() => {
  //   fetch('http://localhost:8000/income', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       amount: incomeAmount.money
  //     })
  //   })
      
  //   .then((res) => res.json())
  //   .then(incomeData => {
  //     console.log(incomeData)
  //     setIncomeAmount(incomeData)
  //   })
  // },[])}
  //   const handleChange = (e) => {
  //       console.log('hi', e.target.value)
  //       setIncomeAmount(e.target.value)
  //   }
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     console.log('hi')
  //   }
//     return (
//         <div id="budget-form" className="budget-form">
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Add Montly Income: $ 
//                 <input 
//                 type="number" 
//                 style={{ margin: 5 }} 
//                 required value={incomeAmount}
//                 onChange={handleChange}
//                 />
//               </label>
//               <button type="submit" value="Submit">Submit</button>
//             </form>
//        </div>
//     )
// }

// export default budgetForm