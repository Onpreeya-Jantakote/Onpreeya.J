"use client";
import { Box, Typography } from "@mui/material";

export default function CircleSkill({
  name,
  percent,
}: {
  name: string;
  percent: number;
}) {
  const size = 120;
  const gradient = `conic-gradient(#786CFF ${percent * 3.6}deg, #D9D9D9 0deg)`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
        }}
      >
        <Box
          sx={{
            width: size - 20,
            height: size - 20,
            backgroundColor: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="#786CFF">
            {percent}%
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ mt: 1, color: "#4C69EB" }}>{name}</Typography>
    </Box>
  );
}
