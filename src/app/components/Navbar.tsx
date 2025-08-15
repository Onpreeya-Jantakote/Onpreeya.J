"use client";
import { useState, useEffect } from "react";
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
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "@mui/material/styles";

const tabs = [
  { label: "About me", id: "about-me" },
  { label: "My Projects", id: "work" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("about-me");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setDrawerOpen(false);
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 80;
      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: "bold", color: "#1B1B1B" }}
          >
            Onpreeya.<span style={{ color: "#4C69EB" }}>J</span>
          </Typography>

          {isMobile ? (
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => handleScroll(tab.id)}
                  sx={{
                    color:
                      activeTab === tab.id
                        ? "#4C69EB"
                        : theme.palette.text.primary,
                    fontWeight: activeTab === tab.id ? "bold" : "normal",
                    borderRadius: 0,
                    textTransform: "none",
                  }}
                >
                  {tab.label}
                </Button>
              ))}
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ height: 70 }} />
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 200 }}>
          {tabs.map((tab) => (
            <ListItem key={tab.id} disablePadding>
              <ListItemButton onClick={() => handleScroll(tab.id)}>
                <ListItemText
                  primary={tab.label}
                  sx={{ color: activeTab === tab.id ? "#4C69EB" : "inherit" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
