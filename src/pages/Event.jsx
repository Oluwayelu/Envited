import birthday from "assets/birthday.png";
import calender from "assets/calender.svg";
import location from "assets/location.svg";

import { useContext } from "react";
import { FormContext } from "context";
import { Details } from "components";

const Event = () => {
  const { details } = useContext(FormContext);
  return (
    <div className="h-screen max-w-6xl md:px-10 pb-10 md:py-40 mx-auto flex flex-col lg:flex-row-reverse items-start lg:items-center justify-center space-y-5">
      <div className="w-full lg:w-1/2 h-full top-0 left-0 flex items-center justify-center">
        <img
          src={birthday}
          alt="landing"
          className="w-full h-full lg:h-4/5 object-cover object-center"
        />
      </div>
      <div className="px-5 w-full lg:w-1/2 h-full flex flex-col space-y-10">
        <div className="">
          <h1 className="text-3xl font-bold text-primary-400">
            {details.hostName ? details.eventName : "Birthday Bash"}
          </h1>
          <p className="text-lg text-neutral-400">
            Hosted by {details.hostName ? details.hostName : "Elysia"}
          </p>
        </div>

        <div className="w-full space-y-5">
          <Details
            icon={calender}
            title={details.startDate ? details.startDate : "18 August 6:00PM"}
            subTitle={`to ${
              details.endDate ? details.endDate : "19 August 1:00PM"
            } UTC +10`}
          />

          <Details
            icon={location}
            title={details.location ? details.location : "Street name"}
            subTitle="Suburb, State, Postcode"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
