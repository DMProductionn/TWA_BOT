import { useEffect, useState } from 'react';
import '../app/css/Deals/CreateDeal/create-deal.css';

const CreateDeal = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 10);
  }, []);

  return (
    <div
      className={`w-full bg-blue-medium h-[500px] rounded-[4px] create-deal-block ${
        active ? 'go-left' : ''
      }`}>
      DealsPage
    </div>
  );
};

export default CreateDeal;
