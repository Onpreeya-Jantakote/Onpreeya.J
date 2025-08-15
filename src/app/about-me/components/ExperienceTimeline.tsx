"use client";

import { Box, Typography, useTheme } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "competition";
}

const experiences: Experience[] = [
  {
    year: "2025",
    title: "Short Video Competition",
    company: "Udon Thani Chamber of Commerce",
    description:
      "Achieved 3rd place in Short Video Competition for Udon Thani Quality Product Certification Program",
    type: "competition",
  },
  {
    year: "2025",
    title: "Software Tester Intern",
    company: "Primo World Co., Ltd.",
    description:
      "Tested web applications, executed API checks with Postman, and presented demos to clients.",
    type: "work",
  },
  {
    year: "2024",
    title: "Women Thailand Cyber Top Talent",
    company: "The National Cyber Security Agency and Huawei Technologies",
    description:
      "3rd Place in Regional Cyber Skills Competition (Preliminary Round)",
    type: "competition",
  },
  {
    year: "2021 - Present",
    title: "Computer and Information Science (4th Year)",
    company: "Khon Kaen University",
    description:
      "Currently in my final year, focusing on programming, UX/UI design, and software development projects.",
    type: "education",
  },
];

export default function ExperienceTimeline() {
  const theme = useTheme();

  return (
    <Box mt={8}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#C17DEB",
          textAlign: "center",
          mb: 6,
        }}
      >
        My Experience
      </Typography>

      <Timeline position="alternate">
        {experiences.map((exp, index) => {
          const dotColor =
            exp.type === "work"
              ? "#4C69EB"
              : exp.type === "education"
              ? "#C17DEB"
              : "#FFD700"; 

          const borderColor =
            exp.type === "work"
              ? "#4C69EB"
              : exp.type === "education"
              ? "#C17DEB"
              : "#FFD700";

          const bgColor =
            theme.palette.mode === "light" ? "#ffffffff" : "#1E1E1E";

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Typography color="textSecondary">{exp.year}</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <TimelineDot
                    sx={{
                      bgcolor: dotColor,
                      border: `3px solid ${borderColor}`,
                    }}
                  >
                    {exp.type === "work" ? (
                      <WorkIcon sx={{ color: "#fff" }} />
                    ) : exp.type === "education" ? (
                      <SchoolIcon sx={{ color: "#fff" }} />
                    ) : (
                      <EmojiEventsIcon sx={{ color: "#fff" }} />
                    )}
                  </TimelineDot>
                </motion.div>
                {index < experiences.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: dotColor }} />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <motion.div
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: bgColor,
                      border: `2px solid ${borderColor}`,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      sx={{ mb: 1 }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography variant="body2">{exp.description}</Typography>
                  </Box>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}
