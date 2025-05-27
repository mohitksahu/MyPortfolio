import React from 'react';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-10 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="flex items-center mb-8 md:mb-14 flex-wrap sm:flex-nowrap">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-fira-code mb-3 sm:mb-0">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">contacts</span>
          </h2>
          <div className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          <div>
            <p className="text-[#abb2bf] font-fira-code mb-8 md:mb-10 max-w-md text-base sm:text-lg md:text-xl">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>

            {/* Dot pattern */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="border-2 border-[#abb2bf] p-4 sm:p-6 md:p-8 rounded-md shadow-md shadow-[#c778dd]/10">
              <h3 className="text-white font-fira-code font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">Message me here</h3>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-center">
                  <img src="/images/img_discord_blue_gr.svg" alt="Discord" className="w-7 h-7 sm:w-9 sm:h-9 mr-3 flex-shrink-0" />
                  <span className="text-[#abb2bf] font-fira-code text-base sm:text-lg">!radon0905</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_email.svg" alt="Email" className="w-7 h-7 sm:w-9 sm:h-9 mr-3 flex-shrink-0" />
                  <span className="text-[#abb2bf] font-fira-code text-sm xs:text-base sm:text-lg break-all">mohitkumarsahu0110@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;