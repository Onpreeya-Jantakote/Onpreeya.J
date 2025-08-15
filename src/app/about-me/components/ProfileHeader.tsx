"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const PurpleCircle = styled(Box)(() => ({
  borderRadius: "50%",
  border: "5px solid #8000ff",
  padding: "10px",
  display: "inline-block",
}));

export default function ProfileHeader() {
  const words = ["UX/UI designer", "Front-end developer"];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const typeTimeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <Box textAlign="center" mt={4}>
      <PurpleCircle>
        <Avatar
          src="/profile/me.jpg"
          alt="Profile"
          sx={{ width: 150, height: 150 }}
        />
      </PurpleCircle>
      <Typography
        variant="h4"
        sx={{ mt: 2, color: "#4E6AEB", fontWeight: "bold" }}
      >
        Onpreeya Jantakote
      </Typography>
      <Typography sx={{ mt: 3, color: "#323232" }}>
        I am passionate about{" "}
        <Box
          component="span"
          sx={{ color: "#5E73ED", fontWeight: "bold" }}
        >
          {displayText}
          <span style={{ borderRight: "2px solid #5E73ED", marginLeft: 2 }} />
        </Box>{" "}
        I learn new things quickly and I have the ability to design graphics and
        create basic websites. I aim to develop my skills and abilities through
        working with organizations to gain experience, and I am committed to
        improving and growing.
      </Typography>
    </Box>
  );
}
