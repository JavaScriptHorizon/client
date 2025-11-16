"use client";

import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartRadialLabel({
  chartConfig,
  chartData,
}: {
  chartConfig: ChartConfig;
  chartData: { browser: string; visitors: number; fill: string }[];
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full h-full"
    >
      <RadialBarChart
        data={chartData}
        startAngle={-90}
        endAngle={380}
        innerRadius={30}
        outerRadius={140}
        barCategoryGap={2}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="browser" />}
        />

        <RadialBar dataKey="visitors" background stroke="none" cornerRadius={8}>
          <LabelList
            dataKey="browser"
            position="insideStart"
            className="fill-white font-semibold tracking-wide"
            fontSize={10}
          />
        </RadialBar>
      </RadialBarChart>
    </ChartContainer>
  );
}
