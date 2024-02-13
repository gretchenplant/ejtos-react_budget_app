import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: ${budget}</span>
<div className='iconNext'> <span>$<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>
</div>
</div>
    );
};
export default Budget;
