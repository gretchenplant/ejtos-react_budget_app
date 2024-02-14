import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>

<table>
      <thead>
        <tr>
          <th>{currency}</th>
          <th><input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></th>
        </tr>
      </thead>
      </table>
</div>
    );
};
export default Budget;
