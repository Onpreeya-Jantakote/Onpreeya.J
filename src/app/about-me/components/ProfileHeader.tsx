"use client";
import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PurpleCircle = styled(Box)(() => ({
  borderRadius: "50%",
  border: "5px solid #8000ff",
  padding: "10px",
  display: "inline-block",
}));

export default function ProfileHeader() {
  return (
    <Box textAlign="center" mt={4}>
      <PurpleCircle>
        <Avatar
          src="/profile.jpg"
          alt="Profile"
          sx={{ width: 150, height: 150 }}
        />
      </PurpleCircle>
      <Typography variant="h4" sx={{ mt: 2, color: "#4E6AEB", fontWeight: "bold" }}>
        Onpreeya Jantakote
      </Typography>
      <Typography sx={{ mt: 3, color: "#323232" }}>
        I am passionate about{" "}
        <Box component="span" sx={{ color: "#5E73ED", fontWeight: "bold" }}>
          UX/UI designer
        </Box>{" "}
        I learn new things quickly and I have the ability to design graphics and
        create basic websites. I aim to develop my skills and abilities through
        working with organizations to gain experience, and I am committed to
        improving and growing.
      </Typography>
    </Box>
  );
}
