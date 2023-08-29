import React from "react";
import { Input } from "./input";
import { BsBell, BsSearch } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/avatar";

type props = {
  pageName: string;
};
const Header = ({ pageName }: props) => {
  return (
    <nav className=" flex justify-between px-1 pt-4 md:px-8 lg:px-14 ">
      <div className="mb-2">
        <h2 className="text-xl font-black capitalize text-blue-600 md:text-4xl ">
          {pageName}
        </h2>
        <h1 className="text-[0.7rem] text-[#8E8E8E] lg:mt-3 lg:text-base">
          Hi Topshi, welcome back!
        </h1>
      </div>
      <div className="flex items-start  justify-start gap-x-6 md:items-center md:justify-center lg:mr-10">
        <div className="flex flex-col items-center gap-x-2 md:flex-row ">
          <div className="relative mb-2 hidden md:mb-0 md:block">
            <Input
              className="rounded-2xl pl-8 text-sm text-[#8E8E8E] md:pl-10 md:text-base"
              placeholder="Search everything"
            />
            <BsSearch className="absolute left-2 top-3 text-[#8E8E8E]" />
          </div>
          <div className="">
            <div className="relative cursor-pointer rounded-full p-2 shadow-md transition-all duration-75 hover:translate-x-[0.5] hover:translate-y-[0.5] hover:shadow-none">
              <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-700"></div>
              <BsBell className="text-blue-700 md:text-xl" />
            </div>
          </div>
        </div>

        <div className="h-10 w-[0.1rem] bg-gray-500"></div>

        <div className="">
          <div className="" title="your avatar">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>TD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// To implement a line chart and add a "yesterday" filter to view the chart of the previous day, you can use a library like `react-chartjs-2` for creating the line chart and manage the data and date filtering in your React component. Here's a step-by-step guide on how to achieve this:

// 1. Install `react-chartjs-2`:

// First, you need to install the `react-chartjs-2` library and its dependencies.

// ```bash
// npm install react-chartjs-2 chart.js
// ```

// 2. Create a Line Chart Component:

// Create a new component that will display the line chart. You can pass data and date range as props to this component.

// ```jsx
// import React from "react";
// import { Line } from "react-chartjs-2";

// const LineChart = ({ data, dates }) => {
//   const chartData = {
//     labels: dates,
//     datasets: [
//       {
//         label: "Data Series",
//         data: data,
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   return <Line data={chartData} />;
// };

// export default LineChart;
// ```

// 3. Create Your Main Component:

// In your main component, you can fetch data and implement the "yesterday" filter to display the chart of the previous day.

// ```jsx
// import React, { useEffect, useState } from "react";
// import LineChart from "./LineChart";

// const MainComponent = () => {
//   const [chartData, setChartData] = useState([]);
//   const [chartDates, setChartDates] = useState([]);

//   const fetchData = async () => {
//     // Fetch your data here, and make sure it contains an array of data and corresponding dates

//     // Sample data structure:
//     // const dataResponse = {
//     //   data: [10, 20, 30, ...],
//     //   dates: ["2023-08-05", "2023-08-06", "2023-08-07", ...],
//     // };

//     // Process dataResponse to set chartData and chartDates
//     // ...

//     setChartData(dataResponse.data);
//     setChartDates(dataResponse.dates);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleYesterdayFilter = () => {
//     // Calculate the date of yesterday
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     const yesterdayDateString = yesterday.toISOString().split("T")[0];

//     // Filter the data and dates for yesterday
//     const filteredData = chartData.filter((_, index) => chartDates[index] === yesterdayDateString);
//     const filteredDates = chartDates.filter(date => date === yesterdayDateString);

//     setChartData(filteredData);
//     setChartDates(filteredDates);
//   };

//   return (
//     <div>
//       <button onClick={handleYesterdayFilter}>View Yesterday's Chart</button>
//       <LineChart data={chartData} dates={chartDates} />
//     </div>
//   );
// };

// export default MainComponent;
// ```

// In the `MainComponent`, the `handleYesterdayFilter` function calculates the date of yesterday and filters the data and dates accordingly. When you click the "View Yesterday's Chart" button, the chart will update to show data for the previous day.

// Please note that the sample data structures are just placeholders. You'll need to adapt them based on your actual data source and structure. Also, adjust the styling and further customization of the chart as needed.
