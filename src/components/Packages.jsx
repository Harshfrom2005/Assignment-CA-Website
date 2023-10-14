import React from "react";
import Card from "./Card";
import Footer from "./Footer";
const Packages = () => {
  return (
    <div className="bg-custom-gradient flex flex-col mt-20 h-screen">
      <div className="text-6xl text-center mb-4 font-bold font-poppins">
        Want to{" "}
        <span
          style={{
            background: "linear-gradient(to right, #0076CE, #9400D3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="ml-5"
        >
          JOIN
        </span>{" "}
        Us?
      </div>
      <div className="text-2xl text-center mt-5">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </div>

      {/* Cards Group 1 */}
      <div className="flex flex-wrap mt-5">
        <Card
          number="1st"
          title="Commencement of business"
          content="Invested shareholders must confirm payment and office address"
          dueDate="Within 180 days"
          penaltyFees={{
            company: "₹50,000 for the company",
            directors: "₹1,000/day for the directors",
          }}
        />
        <Card
          number="2nd"
          title="Auditor Appointment"
          content="Company informs new auditor and submits ADT.1 form to ROC."
          dueDate="Within 30 days"
          penaltyFees={{
            company: "₹300 for per month",
          }}
        />
        <Card
          number="3rd"
          title="DIN eKYC"
          content="Directors share personal information for identification & verification "
          dueDate="Every Year"
          penaltyFees={{
            company: "₹5,000 one time",
          }}
        />
      </div>
      {/* End of Cards Group 1 */}

      {/* {Cards Group 2} */}
      <div className="flex flex-wrap mt-5">
        <Card
          number="4th"
          title="DPT-3"
          content="Companies report money taken from people to ROC; auditors confirm details."
          dueDate="Within 30 days"
          penaltyFees={{
            company: "₹300 per months",
          }}
        />
        <Card
          number="5th"
          title="MCA Form AOC-4"
          content="It's like an official report card for a company's documents"
          dueDate="On or Before 30th November "
          penaltyFees={{
            company: "₹200 per day (No upper limit)",
          }}
        />
        <Card
          number="6th"
          title="MCA Form MGT-7"
          content="Companies must annually report activities and finances to the registrar."
          dueDate="On or Before 30th November"
          penaltyFees={{
            company: "₹200 per day (No upper limit)",
          }}
        />
      </div>
      {/* {End of group 2} */}

      <div className="mt-5 flex flex-col items-center">
        <img src="/assets/Chats.PNG" alt="Chats" />
        <Footer/>
      </div>
    </div>
  );
};

export default Packages;
