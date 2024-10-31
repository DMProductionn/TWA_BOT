import React from 'react';
import { TypeHistoryBalance } from '../../../app/types/History/historyBalance.type';

const History: React.FC<{ history: TypeHistoryBalance }> = ({ history }) => {

  
  return (
    <div className="h-[90px] w-full bg-blue-dark rounded-[4px] flex justify-center relative p-[10px]">
      <div className="flex justify-between items-center h-full w-full">
        <p className="text-[22px]"> {history.amount + 'р'}</p>
        <p className="text-[13px] absolute w-full text-center top-[5px]">{history.created_at}</p>
        <div>
          <p className='text-green'>{history.status}</p>
        </div>
        <div className="relative">
          <svg
            width="42"
            height="40"
            viewBox="0 0 37 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.065 0.108246C30.2542 -0.454513 32.375 1.24802 32.375 3.56834V6.46732H33.5312C35.447 6.46732 37 8.06413 37 10.0339V31.4334C37 33.4032 35.447 35 33.5312 35H3.46875C1.55301 35 0 33.4032 0 31.4334V10.0339C0 8.11794 1.46933 6.55483 3.3126 6.47087L28.065 0.108246ZM12.8611 6.46732H30.0625V3.56834C30.0625 2.7949 29.3556 2.22739 28.6258 2.41498L12.8611 6.46732ZM3.46875 8.84504C2.83017 8.84504 2.3125 9.37731 2.3125 10.0339V31.4334C2.3125 32.09 2.83017 32.6223 3.46875 32.6223H33.5312C34.1698 32.6223 34.6875 32.09 34.6875 31.4334V10.0339C34.6875 9.37731 34.1698 8.84504 33.5312 8.84504H3.46875Z"
              fill="white"
            />
          </svg>
          <p className="absolute z-[99] top-[13px] right-[6px] text-[14px]">{history.last4}</p>
        </div>
      </div>
    </div>
  );
};

export default History;