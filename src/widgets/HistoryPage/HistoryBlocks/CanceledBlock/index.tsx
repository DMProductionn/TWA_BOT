import type { IDeal } from '../../../../app/types/Deals/deal.type';
import NoDeals from '../../../../shared/NoDeals';

const CanceledBlock: React.FC<{ transitionsCanceled: IDeal[] }> = ({ transitionsCanceled }) => {
  return (
    <>
      {transitionsCanceled?.length === 0 ? (
        <NoDeals />
      ) : (
        transitionsCanceled?.map((deal: IDeal) => {
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

export default CanceledBlock;
