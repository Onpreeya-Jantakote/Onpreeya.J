"use client";
import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Stack } from "@mui/system";

const projects = [
  {
    image: "/projects/ProjectMobileApp.png",
    title: "Project Mobile App",
    details: [
      {
        label: "Overview",
        text: "Educational applications regarding computer subjects for elementary students.",
      },
      {
        label: "My role",
        text: "I want users to be able to easily understand and have fun using the application.",
      },
      { label: "User", text: "6 – 12 years" },
      { label: "Platform", text: "Application" },
    ],
  },
  {
    image: "/projects/FITWAY.png",
    title: "FIT WAY Project",
    details: [
      {
        label: "Overview",
        text: "A health and exercise website to help users calculate accurate nutrition and recommend effective eating and exercise.",
      },
      {
        label: "My role",
        text: "I wanted the system to be easy to use and clear, without complexity. Users can see various reviews from other users to make it easier for them to make decisions about using this website.",
      },
      { label: "User", text: "18 - 35 years" },
      { label: "Platform", text: "Website" },
    ],
  },
  {
    image: "/projects/CISEVENTHUB.png",
    title: "CIS EVENT HUB",
    details: [
      {
        label: "Overview",
        text: "CIS Event Hub is a user-centered web platform that makes university event participation simple and engaging. With clear navigation, intuitive event discovery, and responsive design, students can find and join events easily, while staff can manage them efficiently. Features like AI-assisted creation, Google Calendar sync, and real-time notifications enhance usability and keep users engaged.",
      },
      {
        label: "My role",
        text: "I wanted the system to be easy to use and clear, without complexity. Users can see various reviews from other users to make it easier for them to make decisions about using this website.",
      },
      { label: "User", text: "Computer and Information Science and teacher" },
      { label: "Platform", text: "Web Application" },
    ],
  },
];

export default function MyWork() {
  return (
    <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#C17DEB",
          mb: 4,
          textAlign: "center",
        }}
      >
        My Projects
      </Typography>

      <Stack spacing={6}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} reverse={index % 2 === 1} />
        ))}
      </Stack>
    </Box>
  );
}
