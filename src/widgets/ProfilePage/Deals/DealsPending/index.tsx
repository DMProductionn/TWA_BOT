import React from "react"

type TypeDealsPendingProps = {
  first_name: string
  sum: string
}

const DealsPending: React.FC<TypeDealsPendingProps> = ({first_name, sum}) => {
  return (
    <>
    <div className="bg-blue-dark w-full py-[10px] rounded-[4px] flex justify-between items-center px-[15px]">
      <div className="flex flex-col items-center">
        <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
        <p className="text-[13px]">{first_name}</p>
        </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-[18px]">{sum}P</p>
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

        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.1857 1.11279C8.06649 1.06511 7.93351 1.06511 7.8143 1.11279L1.84629 3.49999L4.25 4.46148L10.4037 1.99999L8.1857 1.11279ZM11.75 2.53851L5.59629 4.99999L8 5.96148L14.1537 3.49999L11.75 2.53851ZM15 4.23851L8.5 6.83851V14.7615L15 12.1615V4.23851ZM7.5 14.7615V6.83851L1 4.23851V12.1615L7.5 14.7615ZM7.44291 0.184311C7.80053 0.0412648 8.19947 0.0412647 8.55709 0.184311L15.6857 3.03575C15.8755 3.11169 16 3.29554 16 3.49999V12.1615C16 12.5704 15.751 12.9381 15.3714 13.09L8.1857 15.9642C8.06649 16.0119 7.93351 16.0119 7.8143 15.9642L0.628609 13.09C0.248951 12.9381 0 12.5704 0 12.1615V3.49999C0 3.29554 0.124475 3.11169 0.314305 3.03575L7.44291 0.184311Z"
            fill="white"
          />
        </svg>
      </div>
      <p>Вы</p>
    </div>
    
    <div className="bg-blue-dark w-full py-[10px] rounded-[4px] flex justify-between items-center px-[15px]">
      <div className="flex flex-col items-center">
        <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
        <p className="text-[13px]">Gem4ik01</p>
        </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-[18px]">10.000P</p>
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
            <p className="text-[#d6c422] text-[12px] mt-[5px]">В ожидании</p>
          </div>

        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.1857 1.11279C8.06649 1.06511 7.93351 1.06511 7.8143 1.11279L1.84629 3.49999L4.25 4.46148L10.4037 1.99999L8.1857 1.11279ZM11.75 2.53851L5.59629 4.99999L8 5.96148L14.1537 3.49999L11.75 2.53851ZM15 4.23851L8.5 6.83851V14.7615L15 12.1615V4.23851ZM7.5 14.7615V6.83851L1 4.23851V12.1615L7.5 14.7615ZM7.44291 0.184311C7.80053 0.0412648 8.19947 0.0412647 8.55709 0.184311L15.6857 3.03575C15.8755 3.11169 16 3.29554 16 3.49999V12.1615C16 12.5704 15.751 12.9381 15.3714 13.09L8.1857 15.9642C8.06649 16.0119 7.93351 16.0119 7.8143 15.9642L0.628609 13.09C0.248951 12.9381 0 12.5704 0 12.1615V3.49999C0 3.29554 0.124475 3.11169 0.314305 3.03575L7.44291 0.184311Z"
            fill="white"
          />
        </svg>
      </div>
      <p>Вы</p>
    </div>

    <div className="bg-blue-dark w-full py-[10px] rounded-[4px] flex justify-between items-center px-[15px]">
      <div className="flex flex-col items-center">
        <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
        <p className="text-[13px]">Gem4ik01</p>
        </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-[18px]">10.000P</p>
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

        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.1857 1.11279C8.06649 1.06511 7.93351 1.06511 7.8143 1.11279L1.84629 3.49999L4.25 4.46148L10.4037 1.99999L8.1857 1.11279ZM11.75 2.53851L5.59629 4.99999L8 5.96148L14.1537 3.49999L11.75 2.53851ZM15 4.23851L8.5 6.83851V14.7615L15 12.1615V4.23851ZM7.5 14.7615V6.83851L1 4.23851V12.1615L7.5 14.7615ZM7.44291 0.184311C7.80053 0.0412648 8.19947 0.0412647 8.55709 0.184311L15.6857 3.03575C15.8755 3.11169 16 3.29554 16 3.49999V12.1615C16 12.5704 15.751 12.9381 15.3714 13.09L8.1857 15.9642C8.06649 16.0119 7.93351 16.0119 7.8143 15.9642L0.628609 13.09C0.248951 12.9381 0 12.5704 0 12.1615V3.49999C0 3.29554 0.124475 3.11169 0.314305 3.03575L7.44291 0.184311Z"
            fill="white"
          />
        </svg>
      </div>
      <p>Вы</p>
    </div>
    </>
  )
}

export default DealsPending