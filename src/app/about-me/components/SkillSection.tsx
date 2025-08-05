"use client";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircleSkill from "./CircleSkill";

interface Skill {
  name: string;
  percent: number;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <Box mt={4} textAlign="center">
      <Box
        display="inline-block"
        sx={{
          backgroundColor: "#899EFF",
          color: "#fff",
          fontWeight: "bold",
          px: 3,
          py: 1,
          borderRadius: "999px",
          mb: 3,
          fontSize: "1rem",
        }}
      >
        {title}
      </Box>

      <Box sx={{ maxWidth: 550, mx: "auto" }}>
        <Carousel responsive={responsive} arrows infinite itemClass="carousel-item-padding-0">
          {skills.map((skill) => (
            <CircleSkill key={skill.name} {...skill} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
