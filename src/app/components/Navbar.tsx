"use client";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/about-me" },
  { label: "My Work", path: "/work" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="#1B1B1B" sx={{ fontWeight: "bold" }}>
          Onpreeya.<span style={{ color: "#4C69EB" }}>J</span>
        </Typography>

        <Stack direction="row" spacing={2}>
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;

            return (
              <Link key={tab.path} href={tab.path} passHref>
                <Button
                  sx={{
                    color: isActive ? "#4C69EB" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    borderBottom: isActive ? "2px solid #4C69EB" : "none",
                    borderRadius: 0,
                    textTransform: "none",
                  }}
                >
                  {tab.label}
                </Button>
              </Link>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
