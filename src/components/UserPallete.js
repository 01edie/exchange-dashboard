import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const UserPallete = ({
  formData,
  sessionName,
  setSubmitted,
  setSessionName,
  dataTimer,
  setDataTimer,
  reloadStat,
}) => {
  const [timer, setTimer] = React.useState({
    second: 0,
    minute: 0,
  });

  // for submit timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimer((obj) => {
        if (obj.second === 60) {
          setTimer({ ...obj, second: 0, minute: obj.minute + 1 });
        }
        return { ...obj, second: obj.second + 1 };
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  // for data refresh timer
  React.useEffect(() => {
    const dataTimer = setInterval(() => {
      setDataTimer((obj) => {
        if (obj.second === 60) {
          setDataTimer({ ...obj, second: 0, minute: obj.minute + 1 });
        }
        return { ...obj, second: obj.second + 1 };
      });
    }, 1000);
    return () => {
      clearInterval(dataTimer);
    };
  }, [setDataTimer]);
  const handleClick = () => {
    setSubmitted(false);
    sessionStorage.clear();
    setSessionName(null);
  };
  if (sessionName) {
    return (
      <Card className="shadow-4 bg-indigo-200 mt-2">
        <h2> Welcome back! {sessionName}</h2>
        <p className="ml-2">
          window refreshed{" "}
          {timer.minute === 0
            ? `${timer.second} second ago`
            : `${timer.minute} minute ${timer.second} second ago`}
        </p>

        {reloadStat ? (
          <p className="ml-2">
            Data restored,
            next data refresh in {20-dataTimer.second} second!
          </p>
        ) : (
          <p className="ml-2">
            data refreshed{" "}
            {dataTimer.minute >= 1
              ? `${dataTimer.minute} minute ${dataTimer.second} second ago`
              : `${dataTimer.second} second ago`}
          </p>
        )}

        <Button
          label="Resubmit"
          onClick={() => {
            handleClick();
          }}
          className="ml-2 mt-6"
        />
        <div className="info mt-8">
          <p>NOTE : All the currency values are based to USD</p>
        </div>
      </Card>
    );
  }
  return (
    <Card className="shadow-4 bg-indigo-200 mt-2">
      <h2> Welcome, {formData.name}</h2>
      <p className="ml-2">
        submitted{" "}
        {timer.minute === 0
          ? `${timer.second} second ago`
          : `${timer.minute} minute ${timer.second} second ago`}{" "}
      </p>
      <p className="ml-2">
        data refreshed{" "}
        {dataTimer.minute >= 1
          ? `${dataTimer.minute} minute ${dataTimer.second} second ago`
          : `${dataTimer.second} second ago`}
      </p>
      <Button
        label="Resubmit"
        onClick={() => {
          handleClick();
        }}
        className="ml-2 mt-6"
      />
      <div className="info mt-8">
        <p>NOTE : All the currency values are based to USD</p>
      </div>
    </Card>
  );
};

export default UserPallete;
