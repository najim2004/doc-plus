const Faq = () => {
  return (
    <div className="section mt-[160px]">
      <div className="">
        <button className="btn">FAQ</button>
        <h3 className="mt-4 mb-7 text-primary text-[36px] font-semibold">
          Frequntly Asked Question
        </h3>
      </div>
      <div className="">
        <div className="join join-vertical w-full space-y-3">
          <div className="collapse collapse-arrow join-item border-base-300 border !duration-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            {/* 1st */}
            <div className="collapse-title text-xl font-medium !text-primary capitalize bg-[#FFFFF5] rounded-lg px-[46px]">
              What are your office hours?
            </div>
            <div className="collapse-content px-[46px]">
              <p className="text-secondary/80 capitalize text-sm leading-6">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="collapse collapse-arrow join-item border-base-300 border !duration-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium !text-primary capitalize bg-[#FFFFF5] rounded-lg px-[46px]">
              How can I schedule an appointment?
            </div>
            <div className="collapse-content px-[46px]">
              <p className="text-secondary/80 capitalize text-sm leading-6">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="collapse collapse-arrow join-item border-base-300 border !duration-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium !text-primary capitalize bg-[#FFFFF5] rounded-lg px-[46px]">
              Do you accept insurance?
            </div>
            <div className="collapse-content px-[46px]">
              <p className="text-secondary/80 capitalize text-sm leading-6">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          {/* 4th */}
          <div className="collapse collapse-arrow join-item border-base-300 border !duration-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium !text-primary capitalize bg-[#FFFFF5] rounded-lg px-[46px]">
              What should I bring to my appointment?
            </div>
            <div className="collapse-content px-[46px]">
              <p className="text-secondary/80 capitalize text-sm leading-6">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          {/* 5th */}
          <div className="collapse collapse-arrow join-item border-base-300 border !duration-700">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium !text-primary capitalize bg-[#FFFFF5] rounded-lg px-[46px]">
              Do you offer telemedicine appointments?
            </div>
            <div className="collapse-content px-[46px]">
              <p className="text-secondary/80 capitalize text-sm leading-6">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
