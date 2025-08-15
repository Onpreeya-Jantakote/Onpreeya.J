"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", id: "home" },
  { label: "About me", id: "about-me" },
  { label: "My Work", id: "work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // จอเล็ก
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // ปิด drawer หลังเลือก
    }
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="#1B1B1B" sx={{ fontWeight: "bold" }}>
            Onpreeya.<span style={{ color: "#4C69EB" }}>J</span>
          </Typography>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => handleScroll(tab.id)}
                  sx={{
                    color: pathname === "/" ? "black" : "black",
                    fontWeight: "normal",
                    borderRadius: 0,
                    textTransform: "none",
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 200 }}>
          {tabs.map((tab) => (
            <ListItem key={tab.id} disablePadding>
              <ListItemButton onClick={() => handleScroll(tab.id)}>
                <ListItemText primary={tab.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
