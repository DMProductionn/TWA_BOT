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
      className="max-w-[360px] h-[50px] text-text-black mt-[100px] mb-[10px] font-bold w-full bg-green rounded-[20px] text-center hover:opacity-60 active:opacity-60 transition-all">
      {valueTabsProfile === 'активно' ? 'Условия сделки выполнены' : 'Принять сделку'}
    </button>
  );
};


export default AcceptDeal;
