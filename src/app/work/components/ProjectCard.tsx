"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  details: { label: string; text: string }[];
  reverse?: boolean;
}

export default function ProjectCard({ image, title, details, reverse = false }: ProjectCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          style={{ width: "100%", height: "auto", borderRadius: 16 }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4C69EB" }}>
          {title}
        </Typography>

        <Box mt={2}>
          {details.map((item) => (
            <Box key={item.label} mb={1}>
              <Typography variant="subtitle2" fontWeight="bold">
                {item.label}
              </Typography>
              <Typography variant="body2">{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
