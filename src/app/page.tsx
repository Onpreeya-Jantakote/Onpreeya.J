"use client";

import { Container, Typography, Box } from "@mui/material";
import Navbar from "@/app/components/Navbar";
import ProfileHeader from "@/app/about-me/components/ProfileHeader";
import SkillSection from "@/app/about-me/components/SkillSection";
import MyWork from "./work/components/MyProjects";
import FloatingDock from "./components/FloatingDock";
import ExperienceTimeline from "./about-me/components/ExperienceTimeline";
import ContactForm from "./components/Footer";

const skillsDesign = [
  { name: "Figma", percent: 90 },
  { name: "Illustrator", percent: 50 },
  { name: "Photoshop", percent: 60 },
];

const skillsProgramming = [
  { name: "React", percent: 85 },
  { name: "HTML/CSS", percent: 90 },
  { name: "JavaScript", percent: 80 },
  { name: "NextJS", percent: 60 },
];

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <Container>
        {/* About Me */}
        <Box id="about-me">
          <ProfileHeader />
        </Box>

        {/* My Skills */}
        <Box mt={6}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#4C69EB",
              textAlign: "center",
            }}
          >
            My Skills
          </Typography>
          <SkillSection title="Design Skills" skills={skillsDesign} />
          <SkillSection title="Programming Skills" skills={skillsProgramming} />
          <ExperienceTimeline />
        </Box>

        {/* My Projects */}
        <Box id="work" mt={6}>
          <MyWork />
        </Box>
      </Container>
      <ContactForm />
      <FloatingDock />
    </>
  );
}
