import React from 'react';

const BudgetNumber = ({ money, title, children }) => {
  return (
    <div className="budget_number">
      <div className="budget_number-icon">{children}</div>
      <div className="budget_number-money">
        <div> ${money} </div>
        <small> {title} </small>
      </div>
    </div>
  );
};

export default BudgetNumber;
