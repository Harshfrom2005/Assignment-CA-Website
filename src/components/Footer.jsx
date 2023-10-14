import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-700 text-white relative py-8 hidden sm:block"> 
        <div className="p-5 w-280 mr-60 ml-20">
          <div className="flex flex-col w-full">
            <img
              src="/assets/footer-logo.png"
              alt="Footer Logo"
              className="w-40 flex-shrink-0"
            />
            <div>
              <p className="font-open-sans text-14 font-normal">
                India's first platform dedicated to <br />
                simplifying partner search
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 w-30">
          <div className="flex justify-between space-x-20">
            <div className="flex flex-col">
              <a href="#" className="text-white font-bold">
                Companies
              </a>
              <div className="mt-2 space-y-2 flex flex-col">
                <a href="#" className="text-white font-normal">
                  About
                </a>
                <a href="#" className="text-white font-normal">
                  Pricing
                </a>
                <a href="#" className="text-white font-normal">
                  Careers
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-white font-bold">
                Solutions
              </a>
              <div className="mt-2 space-y-2 flex flex-col">
                <a href="#" className="text-white font-normal">
                  Search
                </a>
                <a href="#" className="text-white font-normal">
                  Connect
                </a>
                <a href="#" className="text-white font-normal">
                  Research
                </a>
                <a href="#" className="text-white font-normal">
                  Academy
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-white font-bold">
                Resources
              </a>
              <div className="mt-2 space-y-2 flex flex-col">
                <a href="#" className="text-white font-normal">
                  Blogs
                </a>
                <a href="#" className="text-white font-normal">
                  Forms
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-white font-bold">
                Support
              </a>
              <div className="mt-2 space-y-2 flex flex-col">
                <a href="#" className="text-white font-normal">
                  Help
                </a>
                <a href="#" className="text-white font-normal">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-white font-bold">
                Legal
              </a>
              <div className="mt-2 space-y-2 flex flex-col">
                <a href="#" className="text-white font-normal">
                  Privacy
                </a>
                <a href="#" className="text-white font-normal">
                  Terms
                </a>
                <a href="#" className="text-white font-normal">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
