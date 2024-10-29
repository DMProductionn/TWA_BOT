

const CanceledDeal: React.FC<{transaction_id: string; mutate: any;}> = ({ transaction_id, mutate }) => {
  const onClickAcceptDeal = () => {
    mutate({ transaction_id });
  };

  return (
    <button
      onClick={onClickAcceptDeal}
      className="w-[60px] h-[60px] rounded-[50%] bg-red flex justify-center items-center absolute bottom-0 left-[15px]">
      <svg
        width="29"
        height="31"
        viewBox="0 0 29 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="27.1899"
          y="2.69385"
          width="36.555"
          height="4.24105"
          rx="2.12052"
          transform="rotate(129.434 27.1899 2.69385)"
          fill="#fff"
        />
        <rect
          x="2.99878"
          y="1.20099"
          width="36.555"
          height="4.24105"
          rx="2.12052"
          transform="rotate(45 2.99878 1.20099)"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

export default CanceledDeal;
