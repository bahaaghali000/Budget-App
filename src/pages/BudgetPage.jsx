import React from 'react';
import Hero from '../components/hero/Hero';
import BudgetContent from '../components/budget/budgetContent/BudgetContent';
import Header from '../components/header/Header';

const BudgetPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BudgetContent />
      </main>
    </>
  );
};

export default BudgetPage;
