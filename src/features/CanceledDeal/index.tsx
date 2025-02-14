

const CanceledDeal: React.FC<{transaction_id: string; mutate: any;}> = ({ transaction_id, mutate }) => {
  const onClickAcceptDeal = () => {
    mutate({ transaction_id });
  };

  return (
    <button
      onClick={onClickAcceptDeal}
      className="max-w-[360px] h-[50px] text-red font-bold w-full bg-blue-medium rounded-[20px] text-center hover:opacity-60 active:opacity-60 transition-all">
      Отменить сделку
    </button>
  );
};

export default CanceledDeal;
