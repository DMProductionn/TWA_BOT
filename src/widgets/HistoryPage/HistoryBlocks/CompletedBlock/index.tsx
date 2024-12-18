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
            <div key={deal.id} className="bg-blue-dark w-full py-[10px] rounded-[4px] flex justify-between items-center px-[15px] relative">
              <div className="flex flex-col items-center">
                <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
                <p className="text-[13px]">{deal.user_initiator.first_name}</p>
              </div>
              <div className="flex items-center gap-[20px]">
                <p>{deal.sum + 'р'}</p>
                <div className="flex flex-col items-center mt-[10px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 11.5C1 11.7761 1.22386 12 1.5 12H13.2929L10.1464 15.1464C9.95118 15.3417 9.95118 15.6583 10.1464 15.8536C10.3417 16.0488 10.6583 16.0488 10.8536 15.8536L14.8536 11.8536C15.0488 11.6583 15.0488 11.3417 14.8536 11.1464L10.8536 7.14645C10.6583 6.95118 10.3417 6.95118 10.1464 7.14645C9.95118 7.34171 9.95118 7.65829 10.1464 7.85355L13.2929 11H1.5C1.22386 11 1 11.2239 1 11.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 4.5C15 4.77614 14.7761 5 14.5 5L2.70711 5L5.85355 8.14645C6.04882 8.34171 6.04882 8.65829 5.85355 8.85355C5.65829 9.04882 5.34171 9.04882 5.14645 8.85355L1.14645 4.85355C0.951184 4.65829 0.951184 4.34171 1.14645 4.14645L5.14645 0.146447C5.34171 -0.0488155 5.65829 -0.0488155 5.85355 0.146447C6.04882 0.341709 6.04882 0.658292 5.85355 0.853554L2.70711 4L14.5 4C14.7761 4 15 4.22386 15 4.5Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[#00E577] text-[12px] mt-[5px]">Завершена</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
                <p className="text-[13px]">{deal.user_user_for.first_name}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CompletedBlock;
