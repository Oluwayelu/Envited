import { createContext, useState } from "react";

export const FormContext = createContext({
  details: "",
  setDetails: () => {},
});

export const FormProvider = ({ children }) => {
  const [details, setDetails] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    image: "",
  });

  return (
    <FormContext.Provider value={{ details, setDetails }}>
      {children}
    </FormContext.Provider>
  );
};
