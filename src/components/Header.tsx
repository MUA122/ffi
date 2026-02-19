import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useScrollTrigger,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Brand Colors
const ORANGE = "#E8651A";
const GRAY = "#8A8A8A";

const navLinks = [
  { label: "Company", to: "/company" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Vendors", to: "/vendors" },
  // { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

// Languages
const languages = [
  { code: "en", label: "English", flag: "/assets/en_icon.png" },
  { code: "ar", label: "Arabic", flag: "/assets/su_icon.png" },
];

// Language Switcher
const LanguageSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Box ref={ref} sx={{ position: "relative", flexShrink: 0 }}>
      <Box
        onClick={() => setOpen((p) => !p)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.5,
          py: 0.85,
          borderRadius: "10px",
          background: open
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.04)",
          border: open
            ? "1px solid rgba(255,255,255,0.2)"
            : "1px solid rgba(255,255,255,0.1)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          userSelect: "none",
          "&:hover": {
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.2)",
          },
        }}
      >
        <Box
          component="img"
          src={selected.flag}
          alt={selected.label}
          sx={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
            boxShadow: "0 0 0 1.5px rgba(255,255,255,0.2)",
          }}
        />
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
          }}
        >
          {selected.label}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        />
      </Box>

      {/* Dropdown */}
      <Box
        sx={{
          position: "absolute",
          top: "calc(100% + 12px)",
          right: 0,
          minWidth: "180px",
          background: "rgba(14,14,14,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          transform: open
            ? "translateY(0px) scale(1)"
            : "translateY(-8px) scale(0.96)",
          pointerEvents: open ? "all" : "none",
          transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 9999,
          "&::before": {
            content: '""',
            position: "absolute",
            top: -7,
            right: 22,
            width: 13,
            height: 13,
            background: "rgba(14,14,14,0.98)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "none",
            borderRight: "none",
            transform: "rotate(45deg)",
            zIndex: 1,
          },
        }}
      >
        {languages.map((lang, i) => {
          const isSelected = selected.code === lang.code;
          return (
            <Box
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.5,
                cursor: "pointer",
                background: isSelected ? `${ORANGE}12` : "transparent",
                borderBottom:
                  i < languages.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                transition: "background 0.18s ease",
                "&:hover": {
                  background: isSelected
                    ? `${ORANGE}20`
                    : "rgba(255,255,255,0.05)",
                },
              }}
            >
              <Box
                component="img"
                src={lang.flag}
                alt={lang.label}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  boxShadow: isSelected
                    ? `0 0 0 2.5px ${ORANGE}`
                    : "0 0 0 1.5px rgba(255,255,255,0.15)",
                  transition: "box-shadow 0.2s",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? "#fff" : "rgba(255,255,255,0.55)",
                  transition: "color 0.18s",
                  flex: 1,
                }}
              >
                {lang.label}
              </Typography>
              {isSelected && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: ORANGE,
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// Logo (go home)

const Logo: React.FC = () => (
  <Box
    component={Link}
    to="/"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      cursor: "pointer",
      textDecoration: "none",
      flexShrink: 0,
      "&:hover .logo-img": { transform: "scale(1.05)" },
    }}
  >
    <Box
      className="logo-img"
      component="img"
      src="/assets/ffi_logo.png"
      alt="FFI"
      sx={{
        height: { xs: 44, md: 52 },
        width: "auto",
        maxWidth: { xs: 52, md: 60 },
        objectFit: "contain",
        transition: "transform 0.3s ease",
        display: "block",
        minWidth: 40,
      }}
    />
    <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: { xs: "15px", md: "17px" },
          letterSpacing: "0.15em",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        FFI
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: { xs: "8.5px", md: "9.5px" },
          letterSpacing: "0.18em",
          color: GRAY,
          textTransform: "uppercase",
          mt: "2px",
        }}
      >
        Construction
      </Typography>
    </Box>
  </Box>
);

// Nav Link
const NavLink: React.FC<{
  label: string;
  to: string;
  active?: boolean;
}> = ({ label, to, active }) => (
  <Box
    component={Link}
    to={to}
    sx={{
      position: "relative",
      color: active ? ORANGE : "rgba(255,255,255,0.6)",
      fontSize: "12.5px",
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      textDecoration: "none",
      px: 0.5,
      py: 1,
      fontFamily: "'Inter', sans-serif",
      transition: "color 0.25s ease",
      whiteSpace: "nowrap",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 2,
        left: 0,
        width: active ? "100%" : "0%",
        height: "2px",
        background: ORANGE,
        transition: "width 0.3s ease",
        borderRadius: "1px",
      },
      "&:hover": {
        color: "#fff",
        "&::after": { width: "100%" },
      },
    }}
  >
    {label}
  </Box>
);

const CTAButton: React.FC<{
  fullWidth?: boolean;
  compact?: boolean;
  onClick?: () => void;
}> = ({ fullWidth, compact, onClick }) => (
  <Button
    onClick={onClick}
    variant="contained"
    endIcon={
      !compact && <ArrowForwardIcon sx={{ fontSize: "13px !important" }} />
    }
    fullWidth={fullWidth}
    sx={{
      background: `linear-gradient(135deg, ${ORANGE} 0%, #bf5410 100%)`,
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: compact ? { lg: "10.5px", xl: "12px" } : "12px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      px: compact ? { lg: 2, xl: 2.5 } : 3,
      py: compact ? { lg: 0.9, xl: 1.1 } : 1.3,
      borderRadius: "8px",
      border: "none",
      boxShadow: `0 4px 18px ${ORANGE}40`,
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
      minWidth: 0,
      flexShrink: 0,
      "&:hover": {
        background: `linear-gradient(135deg, #f07520 0%, ${ORANGE} 100%)`,
        boxShadow: `0 6px 26px ${ORANGE}60`,
        transform: "translateY(-1px)",
      },
      "&:active": { transform: "translateY(0px)" },
    }}
  >
    Get In Touch
  </Button>
);

// Mobile Drawer
const MobileDrawer: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        width: "min(300px, 85vw)",
        background: "#0a0a0a",
        borderLeft: `1px solid ${ORANGE}25`,
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2.5,
        py: 2.5,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Logo />
      <IconButton
        onClick={onClose}
        size="small"
        sx={{
          color: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          p: 0.75,
          "&:hover": { color: "#fff", borderColor: "rgba(255,255,255,0.3)" },
        }}
      >
        <CloseIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>

    <Box
      sx={{
        height: "2px",
        background: `linear-gradient(90deg, ${ORANGE}, transparent)`,
        mx: 2.5,
        mt: 1.5,
        mb: 2,
        borderRadius: "1px",
      }}
    />

    <List sx={{ px: 1.5, flexGrow: 1, py: 0 }}>
      {navLinks.map((link, i) => (
        <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            component={Link}
            to={link.to}
            onClick={onClose}
            sx={{
              borderRadius: "8px",
              px: 2,
              py: 1.5,
              transition: "all 0.2s",
              "&:hover": {
                background: `${ORANGE}10`,
                "& .idx": { color: ORANGE },
                "& .lbl": { color: "#fff" },
              },
            }}
          >
            <Typography
              className="idx"
              sx={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.1em",
                mr: 2,
                minWidth: 18,
                transition: "color 0.2s",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </Typography>
            <ListItemText
              primary={link.label}
              className="lbl"
              primaryTypographyProps={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                sx: { transition: "color 0.2s" },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider sx={{ borderColor: "rgba(255,255,255,0.05)", mx: 2.5, my: 1 }} />

    <Box sx={{ px: 2.5, pb: 3, pt: 1 }}>
      <CTAButton fullWidth />
      <Typography
        sx={{
          textAlign: "center",
          mt: 1.5,
          fontSize: "10px",
          color: "rgba(255,255,255,0.2)",
          fontFamily: "'Inter',sans-serif",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Construction · Infrastructure · Renovation
      </Typography>
    </Box>
  </Drawer>
);

// MAIN HEADER
const FFIHeader: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const { pathname } = useLocation();
  const active = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          px: { xs: "3%", sm: "5%", md: "8%", lg: "10%", xl: "12%" },
          pt: { xs: "12px", md: "16px" },
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            pointerEvents: "all",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: "16px", sm: "20px", md: "24px" },
            height: { xs: "64px", sm: "68px", md: "76px" },
            borderRadius: "16px",
            background: scrolled ? "rgba(9,9,9,0.97)" : "rgba(12,12,12,0.92)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: scrolled
              ? `1px solid ${ORANGE}28`
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? `0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px ${ORANGE}15`
              : "0 6px 32px rgba(0,0,0,0.4)",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            overflow: "visible",
            width: "100%",
            boxSizing: "border-box",
            flexWrap: "nowrap",
            gap: { xs: 1.5, md: 2 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "2.5px",
              background: `linear-gradient(90deg, transparent, ${ORANGE}CC, transparent)`,
              borderRadius: "0 0 4px 4px",
              pointerEvents: "none",
            }}
          />

          <Logo />

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: { lg: "18px", xl: "30px" },
              flex: "1 1 auto",
              minWidth: 0,
              justifyContent: "center",
              mx: 2,
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                to={link.to}
                active={active(link.to)}
              />
            ))}
          </Box>

          {/* Desktop right */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 1.25,
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <LanguageSwitcher />
            <Box component={Link} to="/contact" sx={{ textDecoration: "none" }}>
              <CTAButton compact />
            </Box>
          </Box>

          {/* Mobile controls */}
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <LanguageSwitcher />
              <Box
                component={Link}
                to="/contact"
                sx={{ textDecoration: "none" }}
              >
                <CTAButton compact />
              </Box>
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <LanguageSwitcher />
            </Box>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              sx={{
                color: "#fff",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                width: { xs: 40, sm: 42 },
                height: { xs: 40, sm: 42 },
                flexShrink: 0,
                p: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: `${ORANGE}15`,
                  borderColor: `${ORANGE}55`,
                },
              }}
            >
              <MenuIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: { xs: "88px", sm: "96px", md: "108px" } }} />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default FFIHeader;
