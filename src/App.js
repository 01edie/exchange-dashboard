import React from "react";
import Navbar from "./components/Navbar";
import Form0 from "./components/Form0";
import Features from "./components/Features";
import Exchange from "./components/Exchange";
import UserPallete from "./components/UserPallete";

const App = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  return (
    <>
      <Navbar></Navbar>

      <div className="grid w-full flex flex-wrap justify-content-center m-0">
        <div className="col-4 form-section">
          {submitted ? (
            <UserPallete formData={formData} />
          ) : ( 
            <Form0
              setSubmitted={setSubmitted}
              setFormData={setFormData}
            ></Form0>
          )}
        </div>
        <div className="col-8 h-full feature-section">
          {submitted ? <Exchange></Exchange> : <Features></Features>}
        </div>
      </div>
    </>
  );
};

export default App;
