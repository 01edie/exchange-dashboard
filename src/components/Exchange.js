import React from "react";
import { ExchangeService } from "./Service/ExchangeService";
import Loading from "./Loading";
import Barchart from "./Barchart";
import Areachart, { Areachart2 } from "./Areachart";
import { data } from "./Data";
import Error from "./Error";

const Exchange = () => {
  const [state, setState] = React.useState({
    loading: false,
    exchangeData: {},
    errorMessage: null,
  });

  const fetchData = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await ExchangeService.getExchangeData();
      const result = response.data.rates;
      setState({
        ...state,
        loading: false,
        exchangeData: result,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        errorMessage: error.message,
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  },[]);
  let selectedCountries, currentDate, historicalData;
  
  if (state.exchangeData.INR !== undefined) {
    selectedCountries = [
      { name: "INR", value: state.exchangeData.INR.toFixed(3) },
      { name: "JPY", value: state.exchangeData.JPY.toFixed(3) },
      { name: "PHP", value: state.exchangeData.PHP.toFixed(3) },
      { name: "BRL", value: state.exchangeData.BRL.toFixed(3) },
      { name: "CZK", value: state.exchangeData.CZK.toFixed(3) },
    ];
    selectedCountries.sort((a, b) => b.value - a.value);

    currentDate = new Date();

    historicalData = [
    ...data,
    {
      date: currentDate.toLocaleDateString(),
      INR: state.exchangeData.INR.toFixed(5),
      JPY: state.exchangeData.JPY.toFixed(5),
    },
  ];
  }

  const allData = Object.entries(state.exchangeData);

  const sortedCurrencies = [...allData]
    .sort((a, b) => a[1] - b[1])
    .filter((item) => item[0] !== "USD");

  const top5 = sortedCurrencies.slice(0, 5).map((item) => {
    return {
      name: item[0],
      value: item[1].toFixed(3),
    };
  });


  const bottom5 = sortedCurrencies
    .slice(-5)
    .map((item) => {
      return {
        name: item[0],
        value: item[1].toFixed(3),
      };
    })
    .sort((a, b) => b.value - a.value);

  const dataArea = top5.map((item, index) => {
    const tmp = bottom5[index];
    return {
      ...item,
      name: `${item.name}-${tmp.name}`,
      topCurrencyValue: item.value,
      bottomCurrencyValue: tmp.value,
    };
  });
  

  if (state.loading) {
    return <Loading ></Loading>;
  }
  if(state.errorMessage!==null){
    return <Error errorMessage={state.errorMessage}></Error>
  }
  return (
    <div className="grid w-full mt-2 bg-black-alpha-10 p-3 justify-content-center">
      <Barchart
        chartData={selectedCountries}
        color={"#8884d8"}
        title={"popular countries currency comparison"}
      ></Barchart>
      <Barchart
        chartData={bottom5}
        color={"#f42538"}
        title={"bootom 5 currency comparison"}
      ></Barchart>

      <Areachart
        data={dataArea}
        title={"top 5 currency vs. bottom 5 currency"}
      ></Areachart>

      <Areachart2
        data={historicalData}
        title={"INR vs. JPY respect to USD"}
      ></Areachart2>
    </div>
  );
};

export default Exchange;