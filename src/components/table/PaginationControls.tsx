import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  shownCount: number;
  totalRecords: number;
  onPageChange: (newPage: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  shownCount,
  totalRecords,
  onPageChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pt: 1.5,
        mt: 1,
        borderTop: "1px solid #F1F5F9",
      }}
    >
      <Typography variant="caption" color="#64748B">
        Mostrando {shownCount} de {totalRecords.toLocaleString("en-US")} registros
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          size="small"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Página anterior"
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <Typography variant="caption" fontWeight={600} color="#334155">
          Página {currentPage} de {Math.max(totalPages, 1)}
        </Typography>
        <IconButton
          size="small"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Página siguiente"
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
};
