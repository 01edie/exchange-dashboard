import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form0 from "./components/Form0";
import Features from "./components/Features";
import Exchange from "./components/Exchange";
import UserPallete from "./components/UserPallete";
import { Toast } from "primereact/toast";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const sessionData = sessionStorage.getItem("exchangeData");
  const [sessionName, setSessionName] = useState(
    sessionStorage.getItem("name")
  );

  const [dataTimer, setDataTimer] = React.useState({
    second: 0,
    minute: 0,
  });
  const [reloadStat, setReloadStat] = useState(false);
  const toast = React.useRef();

  return (
    <>
      <Navbar></Navbar>

      <div className="grid w-full flex flex-wrap justify-content-center m-0">
        <div className="col-4 form-section">
          {submitted || sessionName ? (
            <UserPallete
              formData={formData}
              sessionName={sessionName}
              setSubmitted={setSubmitted}
              setSessionName={setSessionName}
              dataTimer={dataTimer}
              setDataTimer={setDataTimer}
              reloadStat={reloadStat}
              
            />
          ) : (
            <Form0
              setSubmitted={setSubmitted}
              setFormData={setFormData}
            ></Form0>
          )}
        </div>
        <div className="col-8 h-full feature-section">
          {submitted || sessionName ? (
            <Exchange
              formData={formData}
              sessionData={sessionData}
              setDataTimer={setDataTimer}
              toast={toast}
              setReloadStat={setReloadStat}
            ></Exchange>
          ) : (
            <Features></Features>
          )}
          <Toast ref={toast} />
        </div>
      </div>
    </>
  );
};

export default App;
