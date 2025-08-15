"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface CircleSkillProps {
  name: string;
  percent: number;
}

export default function CircleSkill({ name, percent }: CircleSkillProps) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  return (
    <Box textAlign="center" sx={{ p: 2 }}>
      <Box sx={{ position: "relative", width: 120, height: 120, margin: "0 auto" }}>
        <svg height={120} width={120}>
          {/* Background circle */}
          <circle
            stroke="#E5E5FF"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="60"
            cy="60"
          />
          {/* Progress circle */}
          <motion.circle
            stroke="#899EFF"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="60"
            cy="60"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (percent / 100) * circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>

        {/* Percent Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {percent}%
          </Typography>
        </Box>
      </Box>

      <Typography mt={1}>{name}</Typography>
    </Box>
  );
}
