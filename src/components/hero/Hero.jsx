import React, { useEffect } from 'react';
import './Hero.css';
import BudgetNumber from './BudgetNumber';

import { useSelector } from 'react-redux';

import { Coins, Wallet, CreditCard } from '@phosphor-icons/react';

const Hero = () => {
  const state = useSelector((state) => state.budget);

  return (
    <div className="hero_budget">
      <div className="hero_budget-bg">
        <img src="https://unsplash.it/1200/400" alt="wallpaper" />
      </div>

      <div className="container">
        <div className="hero_budget-numbers">
          <BudgetNumber money={state.totleMoney} title="total money">
            <Coins weight="duotone" />
          </BudgetNumber>

          <BudgetNumber money={state.totleIncome} title="total income">
            <Wallet weight="duotone" />
          </BudgetNumber>

          <BudgetNumber money={state.totleExpanse} title="total expanse">
            <CreditCard weight="duotone" />
          </BudgetNumber>
        </div>
      </div>
    </div>
  );
};

export default Hero;
