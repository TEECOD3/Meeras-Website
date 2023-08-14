import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

type props = {
  addedViews: number;
  totalViews: number;
};

const StatisticWidget = ({ totalViews, addedViews }: props) => {
  const formattedViews = totalViews.toLocaleString("en-Us");
  return (
    <div className="py-4 px-5 flex flex-col items-center lg:gap-y-2 justify-center ">
      <h2 className="font-bold lg:text-2xl xl:text-3xl">{formattedViews}</h2>
      <div className="flex justify-between gap-x-2 items-center flex-col lg:flex-row">
        <span className="text-[0.7rem] lg:text-base">Total view</span>

        <TrendView addedViews={addedViews} />
      </div>
    </div>
  );
};

type propsTrend = {
  addedViews: number;
};

function TrendView({ addedViews }: propsTrend) {
  return (
    <>
      {addedViews < 10 ? (
        <div className="px-2 mt-1 lg:mt-0 rounded-lg bg-[#fa8694] flex  gap-x-1 items-center">
          <TrendingDown className="text-[#B52A54] h-3 w-3 lg:h-5 lg:w-5" />
          <span className="text-[#B52A54]">-{addedViews}</span>
        </div>
      ) : (
        <div className="px-2 mt-1 lg:mt-0 rounded-lg bg-[#C3EE83] flex  gap-x-1 items-center">
          <TrendingUp className="text-[#489019] h-3 w-3 lg:h-5 lg:w-5" />
          <span className="text-[#489019]">+{addedViews}</span>
        </div>
      )}
    </>
  );
}

export default StatisticWidget;
