import React from 'react';

const RatingUser: React.FC<{ rating: number }> = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const unfilledStars = maxRating - filledStars;

  const filledStarSVG = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.25771 9.6517C2.01619 9.77584 1.74271 9.55889 1.79133 9.28172L2.30991 6.32579L0.108454 4.22789C-0.0972844 4.03183 0.00921575 3.67335 0.284834 3.6342L3.34638 3.19928L4.71146 0.495191C4.83442 0.251603 5.16753 0.251603 5.2905 0.495191L6.65557 3.19928L9.71712 3.6342C9.99274 3.67335 10.0992 4.03183 9.8935 4.22789L7.69204 6.32579L8.21062 9.28172C8.25925 9.55889 7.98577 9.77584 7.74424 9.6517L5.00098 8.24173L2.25771 9.6517Z"
        fill="#48D05D"
      />
    </svg>
  );

  const unfilledStarSVG = (
    <svg width="11" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.25771 9.6517C2.01619 9.77584 1.74271 9.55889 1.79133 9.28172L2.30991 6.32579L0.108454 4.22789C-0.0972844 4.03183 0.00921575 3.67335 0.284834 3.6342L3.34638 3.19928L4.71146 0.495191C4.83442 0.251603 5.16753 0.251603 5.2905 0.495191L6.65557 3.19928L9.71712 3.6342C9.99274 3.67335 10.0992 4.03183 9.8935 4.22789L7.69204 6.32579L8.21062 9.28172C8.25925 9.55889 7.98577 9.77584 7.74424 9.6517L5.00098 8.24173L2.25771 9.6517Z"
        stroke="#48D05D"
        fill="none"
      />
    </svg>
  );

  return (
    <div className="flex items-center gap-[7px] mt-[2px]">
      <p className="text-[14px]">{rating}</p>
      <div className="flex gap-[3px]">
        {[...Array(filledStars)]?.map((_, index) => (
          <React.Fragment key={`filled-${index}`}>{filledStarSVG}</React.Fragment>
        ))}
        {[...Array(unfilledStars)]?.map((_, index) => (
          <React.Fragment key={`unfilled-${index}`}>{unfilledStarSVG}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RatingUser;
