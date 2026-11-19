import React from "react";
import { Grid } from "@mui/material";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import { KpiCard } from "./KpiCard";

interface KpiGridProps {
  avgMaxTemp: number;
  totalRainfall: number;
  rainPercentage: number;
}

export const KpiGrid: React.FC<KpiGridProps> = ({
  avgMaxTemp,
  totalRainfall,
  rainPercentage,
}) => {
  return (
    <Grid container spacing={2.5} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <KpiCard
          title="Temperatura máxima promedio"
          value={avgMaxTemp.toFixed(1)}
          unit="°C"
          icon={<ThermostatOutlinedIcon />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <KpiCard
          title="Precipitación acumulada"
          value={totalRainfall.toLocaleString("en-US")}
          unit="mm"
          icon={<WaterDropOutlinedIcon />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <KpiCard
            title="Días con lluvia"
            value={rainPercentage.toFixed(1)}
            unit="%"
            icon={<PieChartOutlinedIcon />}
        />
      </Grid>
    </Grid>
  );
};

