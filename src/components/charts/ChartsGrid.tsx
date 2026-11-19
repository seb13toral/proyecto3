import React from "react";
import { Grid } from "@mui/material";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { ChartCard } from "./ChartCard";
import { TemperatureLineChart } from "./TemperatureLineChart";
import { RainDistributionDonut } from "./RainDistributionDonut";
import { PrecipitationBarChart } from "./PrecipitationBarChart";
import type {
  MonthlyTempData,
  RainDistributionStats,
  TopLocationData,
} from "../../types/weather.types";

interface ChartsGridProps {
  monthlyTemps: MonthlyTempData[];
  rainDistribution: RainDistributionStats;
  topLocations: TopLocationData[];
  tableNode: React.ReactNode;
}

export const ChartsGrid: React.FC<ChartsGridProps> = ({
  monthlyTemps,
  rainDistribution,
  topLocations,
  tableNode,
}) => {
  return (
    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12, lg: 7 }}>
        <ChartCard
          title="Evolución de temperaturas"
          icon={<ShowChartOutlinedIcon />}
        >
          <TemperatureLineChart data={monthlyTemps} />
        </ChartCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <ChartCard
            title="Días con y sin lluvia"
            icon={<PieChartOutlinedIcon />}
        >
          <RainDistributionDonut
            totalRecords={rainDistribution.totalRecords}
            rainDays={rainDistribution.rainDays}
            noRainDays={rainDistribution.noRainDays}
          />
        </ChartCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 5 }}>
        <ChartCard
          title="Precipitación por localidad (Top 5)"
          icon={<BarChartOutlinedIcon />}
        >
          <PrecipitationBarChart data={topLocations} />
        </ChartCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 7 }}>{tableNode}</Grid>
    </Grid>
  );
};
