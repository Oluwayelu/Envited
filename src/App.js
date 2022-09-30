import "./styles/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormProvider } from "context";
import { Landing, Create, Event } from "pages";
import { CREATE, EVENTS, LANDING } from "routes/CONSTANTS";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LANDING} element={<Landing />} />
          <Route path={CREATE} element={<Create />} />
          <Route path={EVENTS} element={<Event />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;

