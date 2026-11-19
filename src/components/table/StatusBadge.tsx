import React from "react";
import { Chip } from "@mui/material";

interface StatusBadgeProps {
  hasRained: boolean | null;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ hasRained }) => {
  if (hasRained === null) {
    return <Chip label="N/A" size="small" variant="outlined" />;
  }

  return (
    <Chip
      label={hasRained ? "Yes" : "No"}
      size="small"
      sx={{
        fontWeight: 600,
        fontSize: "0.75rem",
        bgcolor: hasRained ? "#DBEAFE" : "#F1F5F9",
        color: hasRained ? "#1E3A8A" : "#475569",
        borderRadius: 1.5,
      }}
    />
  );
};
