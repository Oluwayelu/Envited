import birthday from "assets/birthday.png";
import calender from "assets/calender.svg";
import location from "assets/location.svg";
import arrow from "assets/arrow.svg";

import { FormContext } from "context";
import { useContext } from "react";

const Event = () => {
  const { details } = useContext(FormContext);
  return (
    <div className="h-screen max-w-7xl md:px-10 lg:py-40 mx-auto flex flex-col lg:flex-row-reverse items-start lg:items-center justify-center">
      <div className="w-full lg:w-1/2 h-full top-0 left-0 flex items-center justify-center">
        <img
          src={birthday}
          alt="landing"
          className="w-full h-full lg:h-4/5 object-cover object-center"
        />
      </div>
      <div className="px-5 w-full lg:w-1/2 flex flex-col justify-between items-stretch">
        <h1 className="text-3xl font-bold text-primary-400">
          {details.hostName ? details.eventName : "Birthday Bash"}
        </h1>
        <p className="text-lg text-neutral-400">
          Hosted by {details.hostName ? details.hostName : "Elysia"}
        </p>

        <div className="space-y-5">
          <div className="w-full flex space-x-1 items-center">
            <div className="bg-white w-10 h-10 flex items-center justify-center">
              <img src={calender} alt="calender icon" className="w-7 h-7" />
            </div>

            <div>
              <p className="font-medium">
                <span className="text-primary-400">
                  {details.startDate ? details.startDate : "18 August 6:00PM"}
                </span>{" "}
                to {details.endDate ? details.endDate : "19 August 1:00PM"}
              </p>
            </div>

            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </div>

          <div className="w-full flex space-x-1 items-center">
            <div className="bg-white w-10 h-10 flex items-center justify-center">
              <img src={location} alt="location icon" className="w-7 h-7" />
            </div>

            <div>
              <p className="font-medium">
                <span>
                  {details.location ? details.location : "Street name"}
                </span>
                Suburb, State, Postcode
              </p>
            </div>

            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
