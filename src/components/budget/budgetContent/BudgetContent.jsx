import React, { useEffect } from 'react';
import './BudgetContent.css';

import Tabs from '../../UI/tabs/Tabs';
import Tab from '../../UI/tabs/Tab';

import Transactions from './transctions/Transactions';

import DoughnutChart from './DoughnutChart';

import { useSelector } from 'react-redux';

const BudgetContent = () => {
  const { incomeData, expanseData } = useSelector((state) => state.budget);

  const incomeColors = [
    '#557B83',
    '#82954B',
    '#A2D5AB',
    '#E5EFC1',
    '#85C88A',
    '#0d5235',
    '#82A284',
    '#BABD42',
  ];

  const expanseColors = [
    '#4C0033',
    '#790252',
    '#AF0171',
    'EE80F88',
    '#513252',
    '#7A4069',
    '#CA4E79',
    '#FFC18E',
  ];

  return (
    <div className="budget_content">
      <div className="container">
        <Tabs>
          <Tab title="data">
            <Transactions />
          </Tab>

          <Tab title="income">
            {incomeData.length > 0 ? (
              <DoughnutChart dataTab={incomeData} colors={incomeColors} />
            ) : (
              <p className="no-data">No Data</p>
            )}
          </Tab>

          <Tab title="expanse">
            {expanseData.length > 0 ? (
              <DoughnutChart dataTab={expanseData} colors={expanseColors} />
            ) : (
              <p className="no-data">No Data</p>
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default BudgetContent;
