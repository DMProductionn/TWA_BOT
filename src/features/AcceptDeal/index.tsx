import { UseMutateFunction } from '@tanstack/react-query';

type Props = {
  mutateAccept: UseMutateFunction<any, Error, { transaction_id: string }, unknown>;
  mutateCompletion: UseMutateFunction<any, Error, { transaction_id: string }, unknown>;
  valueTabsProfile: string;
  transaction_id: string;
};

const AcceptDeal: React.FC<Props> = ({
  mutateAccept,
  mutateCompletion,
  valueTabsProfile,
  transaction_id,
}) => {
  const onClickAcceptDeal = () => {
    if (valueTabsProfile === 'активно') {
      mutateCompletion({ transaction_id });
    } else {
      mutateAccept({ transaction_id });
    }
  };

  return (
    <button
      onClick={onClickAcceptDeal}
      className="w-[60px] h-[60px] rounded-[50%] bg-green flex justify-center items-center absolute bottom-0 right-[15px]">
      <svg
        width="36"
        height="29"
        viewBox="0 0 36 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M31.5976 1.65332C32.5189 0.719726 34.0127 0.719726 34.934 1.65332C35.844 2.57547 35.8552 4.06354 34.9675 4.99957L16.1183 27.281C16.1002 27.304 16.0808 27.3259 16.0603 27.3467C15.1389 28.2803 13.6452 28.2803 12.7238 27.3467L1.2535 15.7236C0.332167 14.79 0.332167 13.2764 1.2535 12.3428C2.17483 11.4092 3.6686 11.4092 4.58993 12.3428L14.321 22.2034L31.535 1.72483C31.5544 1.69975 31.5753 1.67587 31.5976 1.65332Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

export default AcceptDeal;
