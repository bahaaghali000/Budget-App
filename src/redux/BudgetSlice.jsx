import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  totleIncome: 0,
  totleExpanse: 0,
  totleMoney: 0,

  sortType: false,
  sortTypeData: [],

  incomeData: [],
  expanseData: [],
};

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addTrans: (state, action) => {
      state.transactions = [...state.transactions, action.payload];

      if (action.payload.type === 'income') {
        state.incomeData = [...state.incomeData, action.payload];

        state.totleIncome += +action.payload.price;
      } else if (action.payload.type === 'expanse') {
        state.totleExpanse += +action.payload.price;

        state.expanseData = [...state.expanseData, action.payload];
      }

      state.totleMoney = state.totleIncome - state.totleExpanse;
    },

    deleteTransaction: (state, action) => {
      state.transactions.splice(action.payload, 1);

      let income = 0;
      let expanse = 0;

      state.transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          income += +transaction.price;

          state.incomeData = state.transactions;
        } else if (transaction.type === 'expanse') {
          expanse += +transaction.price;

          state.expanseData = state.transactions;
        }
      });

      state.totleIncome = income;
      state.totleExpanse = expanse;
      state.totleMoney = income - expanse;
    },

    editTransaction: (state, action) => {
      state.transactions[action.payload.id] = action.payload.update;

      let income = 0;
      let expanse = 0;

      state.transactions.forEach((transaction) => {
        if (transaction.type === 'income') {
          income += +transaction.price;
          state.incomeData = state.transactions;
        } else if (transaction.type === 'expanse') {
          expanse += +transaction.price;
          state.expanseData = state.transactions;
        }
      });

      state.totleIncome = income;
      state.totleExpanse = expanse;
      state.totleMoney = income - expanse;
    },

    sortBy: (state, action) => {
      let data = [...state.transactions];

      if (action.payload === 'date') {
        state.transactions = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        state.sortTypeData = state.sortTypeData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
      } else if (action.payload === 'amount') {
        state.transactions = data.sort((a, b) => b.price - a.price);

        state.sortTypeData = state.sortTypeData.sort(
          (a, b) => b.price - a.price,
        );
      } else {
        state.transactions = data;
      }
    },

    sortType: (state, action) => {
      state.sortTypeData = [...state.transactions];
      if (action.payload === 'income') {
        state.sortType = true;

        state.sortTypeData = state.transactions.filter(
          (trans) => trans.type === 'income',
        );
      } else if (action.payload === 'expanse') {
        state.sortType = true;

        state.sortTypeData = state.transactions.filter(
          (trans) => trans.type === 'expanse',
        );
      } else {
        state.sortType = false;
      }
    },
  },
});

export const {
  addTrans,
  deleteTransaction,
  editTransaction,
  sortBy,
  sortType,
} = budgetSlice.actions;

export default budgetSlice.reducer;
