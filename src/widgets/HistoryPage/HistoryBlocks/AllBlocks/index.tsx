import type { IDeal } from '../../../../app/types/Deals/deal.type';
import NoDeals from '../../../../shared/NoDeals';

const AllBlocks: React.FC<{ transitionsAll: IDeal[] }> = ({ transitionsAll }) => {
  return (
    <>
      {transitionsAll?.length === 0 ? (
        <NoDeals />
      ) : (
        transitionsAll?.map((deal: IDeal) => {
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
                  {deal.status === 'завершено' ? (
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
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.251051 0.251051C0.585786 -0.0836838 1.1285 -0.0836838 1.46323 0.251051L6 4.78782L10.5368 0.251051C10.8715 -0.0836838 11.4142 -0.0836838 11.7489 0.251051C12.0837 0.585786 12.0837 1.1285 11.7489 1.46323L7.21218 6L11.7489 10.5368C12.0837 10.8715 12.0837 11.4142 11.7489 11.7489C11.4142 12.0837 10.8715 12.0837 10.5368 11.7489L6 7.21218L1.46323 11.7489C1.1285 12.0837 0.585786 12.0837 0.251051 11.7489C-0.0836838 11.4142 -0.0836838 10.8715 0.251051 10.5368L4.78782 6L0.251051 1.46323C-0.0836838 1.1285 -0.0836838 0.585786 0.251051 0.251051Z"
                        fill="#F34949"
                      />
                    </svg>
                  )}
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

export default AllBlocks;
