import React from 'react';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">        <div className="flex items-center mb-6 md:mb-12 flex-wrap sm:flex-nowrap">
        <h2 className="text-2xl sm:text-3xl font-medium font-fira-code mb-2 sm:mb-0">
          <span className="text-[#c778dd]">#</span>
          <span className="text-white">contacts</span>
        </h2>
        <div className="h-px bg-[#c778dd] flex-grow ml-0 sm:ml-4 w-full sm:w-auto"></div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <p className="text-[#abb2bf] font-fira-code mb-6 md:mb-8 max-w-md text-sm sm:text-base">
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>

            {/* Dot pattern */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="border border-[#abb2bf] p-3 sm:p-4">
              <h3 className="text-white font-fira-code font-semibold text-base sm:text-lg mb-3 sm:mb-4">Message me here</h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <img src="/images/img_discord_blue_gr.svg" alt="Discord" className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
                  <span className="text-[#abb2bf] font-fira-code text-sm sm:text-base">!radon0905</span>
                </div>                <div className="flex items-center">
                  <img src="/images/img_email.svg" alt="Email" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 flex-shrink-0" />
                  <span className="text-[#abb2bf] font-fira-code text-xs xs:text-sm sm:text-base break-all">mohitkumarsahu0110@gmail.com</span>
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