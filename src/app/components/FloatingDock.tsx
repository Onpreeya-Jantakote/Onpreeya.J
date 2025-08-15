"use client";
import { Box, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

const icons = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    link: "https://github.com/Onpreeya-Jantakote",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    link: "mailto:onp.jantakote@gmail.com",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    link: "https://www.facebook.com/onpreeya.jantakote.96",
  },
];

export default function FloatingDock() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 1000,
      }}
    >
      {icons.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.3 }}
        >
          <Tooltip title={item.label} arrow>
            <IconButton
              sx={{
                backgroundColor: "#ffffffaa",
                color: "#4C69EB",
                "&:hover": {
                  backgroundColor: "#4C69EB",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
}
