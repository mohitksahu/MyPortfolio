import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="border border-[#abb2bf] max-w-3xl mx-auto p-4 sm:p-6 md:p-8 relative">          <div className="absolute -top-5 sm:-top-7 -left-2 sm:-left-3 bg-[#282c33] p-1 sm:p-2">
          <img src="/images/img_.svg" alt="Quote mark" className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>

          <blockquote className="text-lg sm:text-xl md:text-2xl text-white font-fira-code font-medium mb-3 md:mb-4">
            With great power comes great electricity bill
          </blockquote>
          <div className="flex justify-end">
            <div className="border border-[#abb2bf] p-2 sm:p-3 md:p-4">
              <p className="text-white font-fira-code text-sm sm:text-base">- Dr. Me</p>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-[#282c33] p-1 sm:p-2">
              <img src="/images/img_.svg" alt="Quote mark" className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;