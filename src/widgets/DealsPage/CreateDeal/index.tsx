import { useEffect, useState } from 'react';
import '../../../app/css/Deals/CreateDeal/create-deal.css';

const CreateDeal = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <>
      <div className={`absolute top-0 left-0 w-full h-[550px] bg ${active ? 'active-bg' : ''}`}></div>
      <div className={`absolute z-[99] w-full mr-[260px] bg-blue-medium h-[100vh] rounded-[4px] create-deal-block ${active ? 'go-left' : ''}`}></div>
    </>
  );
};

export default CreateDeal;
