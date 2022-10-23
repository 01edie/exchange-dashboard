import React from "react";
import Navbar from "./components/Navbar";
import Form0 from "./components/Form0";
import Features from "./components/Features";
import Exchange from "./components/Exchange";
import UserPallete from "./components/UserPallete";

const App = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const sessionData = sessionStorage.getItem("exchangeData");
  const [sessionName, setSessionName] = React.useState(
    sessionStorage.getItem("name")
  );
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
            <Exchange formData={formData} sessionData={sessionData}></Exchange>
          ) : (
            <Features></Features>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
