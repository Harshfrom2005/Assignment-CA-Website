import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CaDetails = () => {
  const { caName } = useParams();
  const [caDetails, setCaDetails] = useState(null);

  useEffect(() => {
    const fetchCaData = async () => {
      try {
        const response = await fetch("/CA.json"); // Make sure the path is correct
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const ca = data.find((ca) => ca.name === caName);
        setCaDetails(ca);
      } catch (error) {
        console.error("Error fetching CA details:", error);
      }
    };

    fetchCaData();
  }, [caName]);

  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="w-full sm:w-7/12 mt-5 sm:mt-20">
        {caDetails ? (
          <div className="flex flex-col justify-center">
            <span className="font-bold text-4xl">{caDetails.name}</span>
            <span className="font-sans mt-5">{caDetails.intro}</span>
            <div className="flex items-center mt-8">
              <img src="/assets/star-fill.svg" alt="Star" className="mr-2" />
              <span className="text-blue-500 text-xl font-bold mr-2">
                {caDetails.rating}
              </span>
              <span className="text-black text-xl font-semibold">
                ({caDetails.reviewCount} reviews)
              </span>
            </div>
            {caDetails && (
        <div className="w-full sm:w-5/6 mt-5 sm:mt-8 sm:ml-5">
          <div className="rounded-lg bg-white shadow-md p-4">
            <div className="flex justify-between items-center pb-4">
              <span className="text-xl font-normal">
                {caDetails.taskComplexity}
              </span>
              <span className="text-xl font-semibold">
                {caDetails.price}
              </span>
            </div>
            <div className="flex items-center mt-3">
              <img
                src="/assets/calendar-2-line.svg"
                alt="Calendar"
                className="mr-2"
              />
              <span className="text-md font-medium">
                {caDetails.deliveryTime}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-5 sm:mt-8">
              <button className="bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 hover:border-blue-700 hover:text-white mb-3 sm:mb-0">
                Request a Proposal
              </button>
              <button className="bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:border-blue-900 hover-text-blue-900">
                Chat with me
              </button>
            </div>
            {caDetails.testimonial && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Testimonial</h2>
                <p>{caDetails.testimonial.text}</p>
                <p className="text-gray-500 text-sm">
                  - {caDetails.testimonial.author}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    
      {caDetails && (
        <div className="w-5/12 ml-5 sm:mr-5 mt-5 sm:mt-20">
          <img
            src={caDetails.image}
            alt={caDetails.name}
            className="max-w-xl flex-shrink-0 rounded-lg"
            style={{
              background: `url(${caDetails.image}), lightgray 50% / cover no-repeat`,
              width: "40rem",
            }}
          />
          <h1 className="text-black font-bold text-3xl mt-5">
            About {caDetails?.name || "CA"}
          </h1>
          <div className="mt-7 mr-10 text-gray-500 flex flex-row justify-between">
            <div className="flex justify-between flex-col">
              <span className="font-bold">FROM</span>
              <span className="text-black font-medium mt-4">
                {caDetails?.about.from || "N/A"}
              </span>
            </div>
            <div className="flex justify-between flex-col">
              <span className="font-bold">PARTNER SINCE</span>
              <span className="text-black font-medium mt-4">
                {caDetails?.about.partnerSince || "N/A"}
              </span>
            </div>
            <div className="flex justify-between flex-col">
              <span className="font-bold">AVERAGE RESPONSE TIME</span>
              <span className="text-black font-medium mt-4">
                {caDetails?.about.averageResponseTime || "N/A"}
              </span>
            </div>
          </div>
          <div className="mt-5 text-gray-500">
            <h2 className="text-md mt-10 font-bold">ABOUT</h2>
            <p className="text-black mt-2 font-medium">
              {caDetails?.about.description || "No information available."}
            </p>
          </div>
          <div className="w-full flex flex-row mt-5">
            <div className="mt-5 text-gray-500">
              <h2 className="text-md font-bold">SERVICES I OFFER</h2>
              {caDetails?.about.services &&
              caDetails.about.services.length > 0 ? (
                <ul className="list-disc list-inside font-medium text-black">
                  {caDetails.about.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              ) : (
                <p>No services listed.</p>
              )}
            </div>
            <div className="mt-5 ml-5 sm:ml-24">
              <h2 className="text-md font-bold text-gray-500">WHY ME</h2>
              {caDetails?.about.benefits &&
              caDetails.about.benefits.length > 0 ? (
                <ul className="list-disc list-inside font-medium text-black">
                  {caDetails.about.benefits.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              ) : (
                <p>No reasons provided.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaDetails;
