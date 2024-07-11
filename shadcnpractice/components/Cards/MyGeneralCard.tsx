"use client";
import React from "react";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the types for the data
type DataPoint = {
  x: string;
  y: number;
};

type Series = {
  id: string;
  color: string;
  data: DataPoint[];
};

type MyResponsiveLineProps = {
  data: Series[];
};

const MyResponsiveLine = ({ data }: MyResponsiveLineProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 80, bottom: 50, left: 50 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

function MyGeneralCard() {
  const data: Series[] = [
    {
      id: "japan",
      color: "hsl(240, 100%, 50%)",
      data: [
        { x: "plane", y: 72 },
        { x: "helicopter", y: 51 },
        { x: "boat", y: 215 },
        { x: "train", y: 142 },
        { x: "subway", y: 274 },
        { x: "bus", y: 46 },
        { x: "car", y: 227 },
        { x: "moto", y: 130 },
        { x: "bicycle", y: 268 },
        { x: "horse", y: 156 },
        { x: "skateboard", y: 293 },
        { x: "others", y: 121 },
      ],
    },
    {
      id: "france",
      color: "hsl(226, 70%, 50%)",
      data: [
        { x: "plane", y: 239 },
        { x: "helicopter", y: 138 },
        { x: "boat", y: 92 },
        { x: "train", y: 218 },
        { x: "subway", y: 168 },
        { x: "bus", y: 191 },
        { x: "car", y: 162 },
        { x: "moto", y: 10 },
        { x: "bicycle", y: 58 },
        { x: "horse", y: 6 },
        { x: "skateboard", y: 113 },
        { x: "others", y: 71 },
      ],
    },
    // Add other series as needed
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>This Week</CardTitle>
        <CardDescription>These are the results of this week</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 h-[400px]">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}

export default MyGeneralCard;
