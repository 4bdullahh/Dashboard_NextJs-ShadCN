"use client";
import React from "react";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";
import { Card, CardContent } from "../ui/card";

const generateExemplarData = () => {
  const startDate = new Date("2018-04-01");
  const endDate = new Date("2018-08-12");
  const data = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    data.push({
      day: d.toISOString().split("T")[0], // Format date as 'YYYY-MM-DD'
      value: Math.floor(Math.random() * 100), // Random value between 0 and 99
    });
  }

  return data;
};
interface DataItem {
  day: string;
  value: number;
}
interface MyResponsiveTimeRangeProps {
  data: DataItem[];
}
const MyResponsiveTimeRange: React.FC<MyResponsiveTimeRangeProps> = ({
  data,
}) => (
  <ResponsiveTimeRange
    data={data}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        justify: false,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
        translateX: -60,
        translateY: -60,
        symbolSize: 20,
      },
    ]}
  />
);

const MyCalendar = () => {
  const data = generateExemplarData();
  return (
    <Card>
      <CardContent className="h-[160px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default MyCalendar;
