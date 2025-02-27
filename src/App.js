import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
import './components/ComponentCss.css';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                     // Budget component
                    <div className='col-sm'>
                    <Budget />
                </div>
                        }  
                        {
                             <div className='col-sm'>
                             <Currency />
                         </div>
                        }      

                        {
                    //Remaining component
                    <div className='col-sm'>
                    <RemainingBudget />
                </div>
                        }        

                        {
                    //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                        }        
                       
                        {
                         <div className='col-sm'>
                         <ExpenseList />
                     </div>
                        }         

                               

                        {
                             <div className='col-sm'>
                             <AllocationForm />
                         </div>
                        }        
                          
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
