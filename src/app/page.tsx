"use client";

import { Container, Typography, Box } from "@mui/material";
import Navbar from "@/app/components/Navbar";
import ProfileHeader from "@/app/about-me/components/ProfileHeader";
import SkillSection from "@/app/about-me/components/SkillSection";
import MyWork from "./work/components/MyProjects";

const skillsDesign = [
  { name: "Figma", percent: 90 },
  { name: "Illustrator", percent: 80 },
  { name: "Photoshop", percent: 70 },
];

const skillsProgramming = [
  { name: "React", percent: 85 },
  { name: "HTML/CSS", percent: 90 },
  { name: "JavaScript", percent: 80 },
];

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <Container>
        <ProfileHeader />
        <Box mt={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#4C69EB", textAlign: "center" }}>
            My Skills
          </Typography>
          <SkillSection title="Design Skills" skills={skillsDesign} />
          <SkillSection title="Programming Skills" skills={skillsProgramming} />
          <MyWork />
        </Box>
      </Container>
    </>
  );
}
