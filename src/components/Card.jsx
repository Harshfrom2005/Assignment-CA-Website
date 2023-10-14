import React from 'react';

const Card = ({ number, title, content, dueDate, penaltyFees }) => {
  return (
    <div className="w-full sm:w-1/3 p-4"> {/* Set width to w-full for mobile and tablet screens */}
      <div className="relative">
        <div className="absolute top-0 left-0 rounded-md pt-2 pb-2 bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 text-white px-2 font-semibold">
          {number}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 h-56">
          <div className="font-poppins text-xl font-bold text-center">
            {title}
          </div>
          <div className="text-center font-poppins text-md font-normal">
            {content}
          </div>
          <div className="bg-gray-300 rounded-xl p-2 mt-2 h-28">
            <div className="flex justify-between">
              <div className="w-1/2 text-blue-500 font-bold text-center">Due Date</div>
              <div className="w-1/2 text-red-500 font-bold text-center">Penalty Fees</div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 text-center">{dueDate}</div>
              <div className="w-1/2 text-center">
                {penaltyFees && (
                  <>
                    <div>{penaltyFees.company}</div>
                    <div>{penaltyFees.directors}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
