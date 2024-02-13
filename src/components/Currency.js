import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './ComponentCss.css';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert currencyBox alert-secondary'> Currency {
      <select name="Currency" id="Currencybox" className='currencyDdn' onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">Dollar($)</option>
        <option value="£">Pound(£)</option>
        <option value="€">Euro(€)</option>
        <option value="CAD">Ruppee(₹)</option>
      </select>	
      }	
    </div>
    );
};
export default Currency;