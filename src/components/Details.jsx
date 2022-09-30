import arrow from "assets/arrow.svg";

const Details = ({ icon, title, subTitle }) => {
  return (
    <div className="w-full lg:w-3/4 flex space-x-1 items-center justify-between">
      <div className="inline-flex items-center space-x-2">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg">
          <img src={icon} alt="calender icon" className="w-7 h-7" />
        </div>

        <div>
          <p className="font-medium text-primary-400">{title}</p>
          <p>{subTitle}</p>
        </div>
      </div>

      <img src={arrow} alt="arrow" className="w-4 h-4" />
    </div>
  );
};

export default Details;
