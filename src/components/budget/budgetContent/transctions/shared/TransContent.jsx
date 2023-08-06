import React from 'react';

import SingleTrans from './singleTrans';

import { useSelector } from 'react-redux';

const TransContent = () => {
  const { transactions, sortType, sortTypeData } = useSelector(
    (state) => state.budget,
  );

  return (
    <div className="trans_content">
      {transactions.length >= 1 ? (
        <>
          {sortType ? (
            <>
              {sortTypeData.length > 0 ? (
                <>
                  {sortTypeData.map((tarn, index) => (
                    <SingleTrans data={tarn} key={index + 1} id={index + 1} />
                  ))}
                </>
              ) : (
                <>
                  <p className="no-data">No Data</p>
                </>
              )}
            </>
          ) : (
            <>
              {transactions.map((tarn, index) => (
                <SingleTrans data={tarn} key={index + 1} id={index + 1} />
              ))}
            </>
          )}
        </>
      ) : (
        <p className="no-data">No Data</p>
      )}
    </div>
  );
};

export default TransContent;
