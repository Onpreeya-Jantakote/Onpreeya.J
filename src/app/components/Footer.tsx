"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        mt: 12,
        bgcolor: "#4C69EB",
        height: { xs: 200, md: 250 },
        clipPath: "ellipse(70% 100% at 50% 0%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        pt: 6,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box sx={{ px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          "I'll look forward to working with you soon"
        </Typography>
        <Typography variant="subtitle1">Respectfully Yours</Typography>
      </Box>
    </Box>
  );
}
