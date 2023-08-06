import React, { useEffect, useState } from 'react';

import { sortBy, sortType } from '../../../../../redux/BudgetSlice';
import { useDispatch } from 'react-redux';

const TransHeader = () => {
  const [sort, setSort] = useState('');
  const [type, setType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortBy(sort));
  }, [sort]);

  useEffect(() => {
    dispatch(sortType(type));
  }, [type]);

  return (
    <div className="trans_header">
      <h3 className="trans_header-title">Recent Transactions</h3>
      <div className="trans_header-filters">
        <select
          name="keys"
          className="filters-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <select
          name="all"
          className="filters-select"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expanse">Expanse</option>
        </select>
      </div>
    </div>
  );
};

export default TransHeader;
