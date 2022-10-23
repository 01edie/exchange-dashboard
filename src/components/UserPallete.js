import React from "react";
import { Card } from "primereact/card";

const UserPallete = ({ formData }) => {
  const [timer, setTimer] = React.useState({
    second: 0,
    minute: 0,
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimer((obj) => {
        if (obj.second === 60) {
          setTimer({ ...timer, second: 0, minute: obj.minute + 1 });
        }
        return { ...obj, second: obj.second + 1 };
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Card className="shadow-4 bg-indigo-200 ml-2 mt-2">
      <h2> Welcome, {formData.name}</h2>
      <p>
        submitted{" "}
        {timer.minute === 0
          ? `${timer.second} second ago`
          : `${timer.minute} minute ${timer.second} second ago`}{" "}
      </p>
      <div className="info mt-8">
        <p>NOTE : All the currency values are based to USD</p>
      </div>
    </Card>
  );
};

export default UserPallete;
