import React, { useRef, useState } from 'react';

import { CurrencyDollar, PencilLine, Trash } from '@phosphor-icons/react';

import Button from '../../../../UI/button/Button';

import { deleteTransaction } from '../../../../../redux/BudgetSlice';
import { useDispatch } from 'react-redux';
import Pop from '../../../../UI/pop/Pop';

const SingleTrans = ({ data, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="trans_item">
      <div
        className={`trans_item-icon ${data.type === 'expanse' && 'expanse'}`}
      >
        <CurrencyDollar />
      </div>

      <div className="trans_item-data">
        <h4>{data.title}</h4>
        <div>
          <small>${data.price}</small>,<small>{data.date}</small>,
          <small>{data.category}</small>
        </div>
      </div>

      <div className="trans_item-cta">
        <div onClick={() => setIsEditMode(true)}>
          <Button icon>
            <PencilLine />
          </Button>
        </div>

        <div onClick={() => dispatch(deleteTransaction(id - 1))}>
          <Button icon type="error">
            <Trash />
          </Button>
        </div>
      </div>
      {isEditMode && (
        <Pop
          hidden={() => setIsEditMode(false)}
          data={data}
          isEditMode={isEditMode}
          id={id}
        />
      )}
    </div>
  );
};

export default SingleTrans;
