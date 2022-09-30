import { Input } from "components";
import { useNavigate } from "react-router-dom";
import { EVENTS } from "routes/CONSTANTS";
import { FormContext } from "context";
import { useContext } from "react";

const Create = () => {
  const navigate = useNavigate();
  const { details, setDetails } = useContext(FormContext);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(EVENTS);
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center space-y-5">
      <h1 className="text-3xl md:text-6xl font-bold text-primary-400">
        Create Your Event
      </h1>

      <form onSubmit={onSubmit} className="w-2/3 space-y-3">
        <Input
          name="eventName"
          label="Event name"
          type="text"
          onChange={handleChange}
        />
        <Input
          name="hostName"
          label="Host name"
          type="text"
          onChange={handleChange}
        />
        <Input
          name="startDate"
          label="Start date"
          type="date"
          onChange={handleChange}
        />
        <Input
          name="endDate"
          label="End date"
          type="date"
          onChange={handleChange}
        />
        <Input
          name="location"
          label="Location"
          type="text"
          onChange={handleChange}
        />
        <Input
          name="image"
          label="Event Photo"
          type="file"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-1/3 px-5 py-2 text-white bg-gradient-to-r from-primary-200 to-primary-100 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Create;
