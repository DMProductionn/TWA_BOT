import type { IDeal } from '../../../../app/types/Deals/deal.type';
import NoDeals from '../../../../shared/NoDeals';

const CompletedBlock: React.FC<{ transitionsCompleted: IDeal[] }> = ({ transitionsCompleted }) => {
  return (
    <>
      {transitionsCompleted?.length === 0 ? (
        <NoDeals />
      ) : (
        transitionsCompleted?.map((deal: IDeal) => {
          return (
            <div
              key={deal.id}
              className="w-full bg-blue-medium h-[70px] rounded-[20px] py-[10px] flex justify-between items-center px-[15px] relative">
              <div className="flex gap-[10px] items-center">
                <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
                <p className="text-[14px]">{deal.user_user_for.first_name}</p>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="flex flex-col items-center">
                  <svg
                    width="13"
                    height="11"
                    viewBox="0 0 13 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.9569 0.371749C11.4243 -0.123916 12.1821 -0.123916 12.6495 0.371749C13.1111 0.861335 13.1168 1.65138 12.6664 2.14834L6.29573 10.5934C6.28654 10.6056 6.27671 10.6172 6.2663 10.6283C5.79891 11.1239 5.04111 11.1239 4.57371 10.6283L0.350547 6.14965C-0.116849 5.65398 -0.116849 4.85035 0.350547 4.35469C0.817942 3.85902 1.57574 3.85902 2.04314 4.35469L5.38395 7.89756L10.9251 0.409716C10.935 0.396398 10.9456 0.383719 10.9569 0.371749Z"
                      fill="#48D05D"
                    />
                  </svg>
                </div>
                <p className="text-[16px] font-bold">{deal.sum + ' RUB'}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CompletedBlock;
