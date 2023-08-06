import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import './Pop.css';

import { useDispatch, useSelector } from 'react-redux';
import { addTrans, editTransaction } from '../../../redux/BudgetSlice';

import Button from '../button/Button';

const Pop = ({ hidden, data, isEditMode, id }) => {
  const dispatch = useDispatch();

  const [blur, setBlur] = useState(false);

  const [inputsErrors, setInputsErrors] = useState({
    titleError:
      "This field should be 3-20 characters and shouldn't include any special character!",
    amountError: 'Please, Enter a postive number',
    dateError: 'Enter Date',
    categoryError: 'Select a category',
  });

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (isEditMode) {
      setTitle(data.title);
      setPrice(data.price);
      setType(data.type);
      setCategory(data.category);
      setDate(data.date);
    }
  }, [isEditMode]);

  const handleSend = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && price && date && price > 1) {
      if (!isEditMode) {
        dispatch(
          addTrans({
            title,
            price,
            date,
            category,
            type,
          }),
        );

        hidden();
      } else if (isEditMode) {
        dispatch(
          editTransaction({
            id: id - 1,
            update: {
              title,
              price,
              date,
              category,
              type,
            },
          }),
        );

        hidden();
      }
    }
  };

  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        setBlur(true);
        input.setAttribute('blur', blur.toString());
      });
    });
  });

  return ReactDOM.createPortal(
    <div className="pop" onClick={hidden}>
      <div className="model" onClick={(e) => e.stopPropagation()}>
        <h1>{data ? 'Edit' : 'Add New'} Budget</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={handleSend(setTitle)}
              value={title}
              placeholder="title..."
              required
              // pattern="^[a-zA-Z0-9]{3,20}"
            />

            <p className="input-error">{inputsErrors.titleError}</p>
          </div>

          <div className="input">
            <label htmlFor="number">Amount</label>
            <input
              type="number"
              id="number"
              onChange={handleSend(setPrice)}
              value={price}
              placeholder="$ amount..."
              required
            />

            <p className="input-error">{inputsErrors.amountError}</p>
          </div>

          <div className="selection">
            <div>
              <h4>Type</h4>
              <select onInput={handleSend(setType)} value={type}>
                <option value="income">income</option>
                <option value="expanse">expanse</option>
              </select>
            </div>

            <div>
              <h4>Category</h4>
              <select
                onChange={handleSend(setCategory)}
                blur={blur}
                value={category}
                required
                onBlur={() => setBlur(true.toString())}
              >
                <option value="">Select Category</option>
                <option value="bussines">Bussines</option>
                <option value="monthly-income">Monthly Income</option>
                <option value="investment">Investment</option>
                <option value="home-needs">Home Needs</option>
                <option value="bucket-list">Bucket List</option>
                <option value="savings">Savings</option>
                <option value="freelance">Freelance</option>
              </select>
              <p className="input-error category-error">
                {inputsErrors.categoryError}
              </p>
            </div>
          </div>

          <div className="input">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              onChange={handleSend(setDate)}
              blur={blur}
              onBlur={() => setBlur(true.toString())}
              value={date}
            />
            <p className="input-error">{inputsErrors.dateError}</p>
          </div>
          <button
            disabled={title && price && date && category ? false : true}
            style={{
              border: 'none',
              outline: 'none',
              background: 'none',
            }}
          >
            <Button size="large" block={false}>
              {data ? 'Edit' : 'Save'}
            </Button>
          </button>
        </form>
      </div>
    </div>,
    document.querySelector('#model_root'),
  );
};

export default Pop;
