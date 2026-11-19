import React from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  onToggleTheme: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  onToggleTheme,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box
        component="header"
        sx={{
          bgcolor: "#070B28",
          color: "#FFFFFF",
          px: 2.5,
          py: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700} lineHeight={1.2}>
          {title}
        </Typography>
        <IconButton
          onClick={onToggleTheme}
          aria-label="Estado climático"
          sx={{
            bgcolor: "#E0E7FF",
            color: "#1E3A8A",
            borderRadius: 3,
            px: 2,
            py: 1,
            "&:hover": { bgcolor: "#C7D2FE" },
          }}
        >
          <WbSunnyOutlinedIcon />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={700} color="#0F172A">
          {title}
        </Typography>
        <Typography variant="body2" color="#64748B" sx={{ mt: 0.3 }}>
          {subtitle}
        </Typography>
      </Box>
      <IconButton
        onClick={onToggleTheme}
        aria-label="Cambiar modo"
        sx={{
          bgcolor: "#E0E7FF",
          color: "#1E3A8A",
          borderRadius: 3,
          px: 2.5,
          py: 1.2,
          "&:hover": { bgcolor: "#C7D2FE" },
        }}
      >
        <WbSunnyOutlinedIcon />
      </IconButton>
    </Box>
  );
};