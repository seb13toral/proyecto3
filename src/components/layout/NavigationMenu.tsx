import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export type NavSection = "inicio" | "analisis" | "datos" | "acerca";

interface NavigationMenuProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

const NAV_ITEMS: { id: NavSection; label: string; icon: React.ReactNode }[] = [
  { id: "inicio", label: "Inicio", icon: <HomeOutlinedIcon /> },
  { id: "analisis", label: "Análisis", icon: <BarChartOutlinedIcon /> },
  { id: "datos", label: "Datos", icon: <TableChartOutlinedIcon /> },
  { id: "acerca", label: "Acerca del dataset", icon: <InfoOutlinedIcon /> },
];

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Paper
        elevation={8}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          bgcolor: "#070B28",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden",
        }}
      >
        <BottomNavigation
          value={activeSection}
          onChange={(_, newValue: NavSection) => onSelectSection(newValue)}
          sx={{
            bgcolor: "#070B28",
            height: 64,
            "& .MuiBottomNavigationAction-root": {
              color: "#94A3B8",
              minWidth: 0,
            },
            "& .Mui-selected": {
              color: "#FFFFFF !important",
            },
          }}
        >
          {NAV_ITEMS.map((item) => (
            <BottomNavigationAction
              key={item.id}
              value={item.id}
              icon={
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    border:
                      activeSection === item.id
                        ? "1.5px solid #3B82F6"
                        : "1.5px solid transparent",
                    bgcolor:
                      activeSection === item.id
                        ? "rgba(37, 99, 235, 0.25)"
                        : "transparent",
                    display: "flex",
                  }}
                >
                  {item.icon}
                </Box>
              }
            />
          ))}
        </BottomNavigation>
      </Paper>
    );
  }

  return (
    <Box
      component="aside"
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: "#070B28",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        p: 2.5,
      }}
    >
      <Box>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4, px: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              bgcolor: "#1E3A8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WbSunnyOutlinedIcon sx={{ color: "#93C5FD", fontSize: 22 }} />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} lineHeight={1.2}>
              AU Weather
            </Typography>
            <Typography variant="caption" sx={{ color: "#94A3B8" }}>
              Dashboard
            </Typography>
          </Box>
        </Box>

        {/* Enlaces de navegación */}
        <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
          {NAV_ITEMS.map((item) => {
            const isSelected = activeSection === item.id;
            return (
              <ListItemButton
                key={item.id}
                selected={isSelected}
                onClick={() => onSelectSection(item.id)}
                sx={{
                  borderRadius: 2.5,
                  py: 1.2,
                  px: 1.5,
                  color: isSelected ? "#FFFFFF" : "#94A3B8",
                  bgcolor: isSelected ? "#1D4ED8 !important" : "transparent",
                  "&:hover": {
                    bgcolor: isSelected
                      ? "#1D4ED8"
                      : "rgba(255, 255, 255, 0.06)",
                    color: "#FFFFFF",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: isSelected ? "#FFFFFF" : "#94A3B8",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: isSelected ? 600 : 400,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      {/* Pie del sidebar */}
      <Box
        sx={{
          p: 2,
          borderRadius: 2.5,
          bgcolor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Typography
          variant="caption"
          fontWeight={600}
          display="block"
          sx={{ color: "#E2E8F0", mb: 0.5 }}
        >
          Fuente de datos
        </Typography>
        <Typography variant="caption" sx={{ color: "#94A3B8", lineHeight: 1.4 }}>
          Rain in Australia (Kaggle) · Oficina de Meteorología de Australia
        </Typography>
      </Box>
    </Box>
  );
};

