import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: ${budget}</span>

<table>
      <thead>
        <tr>
          <th>ff</th>
          <th><input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></th>
        </tr>
      </thead>
      </table>
</div>
    );
};
export default Budget;
