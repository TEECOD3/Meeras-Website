import StatisticWidget from "@/components/UI/StatisticWidget";
import Header from "@/components/UI/Header";
import React from "react";
import Linechart from "@/components/UI/Linechart";

const AdminDashboard = () => {
  return (
    <section className="min-h-screen">
      <Header pageName="Dashboard" />
      <section className="lg:mt-10 grid grid-cols-2 md:grid-cols-4 w-10/12 grid-gap-0">
        <StatisticWidget totalViews={2334449} addedViews={22} />
        <StatisticWidget totalViews={2334449} addedViews={8} />
        <StatisticWidget totalViews={2334449} addedViews={4} />
        <StatisticWidget totalViews={2334449} addedViews={22} />
      </section>
      <Linechart />
    </section>
  );
};

export default AdminDashboard;
