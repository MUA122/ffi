import * as React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const ORANGE = "#E8651A";

type Props = {
  id?: string;

  title?: string;
  description?: string;
  locationText?: string;
  email?: string;
  phone?: string;
  mapsUrl?: string;

  socials?: Partial<{
    linkedin: string;
    instagram: string;
    x: string;
    facebook: string;
  }>;

  onSubmit?: (data: {
    name: string;
    phone: string;
    email: string;
    message: string;
  }) => void;
};

export default function ContactSection({
  id = "contact",
  title = "Let’s Talk",
  description = `Fathi Fouad Itani Contracting Company offers services in telecommunications, infrastructure, roads, sewage, water supply, excavation, drainage, landscaping, railways, tunnels, dams, electromechanical works, and construction supervision and testing.`,
  locationText = "6859, Jeddah Kingdom of Saudi Arabia",
  email = "info@fficontracting.com",
  phone = "+966558513312",
  mapsUrl = "https://www.google.com/maps/search/?api=1&query=Jeddah%2C%20Saudi%20Arabia",
  socials = {
    linkedin: "#",
    instagram: "#",
    x: "#",
    facebook: "#",
  },
  onSubmit,
}: Props) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "#000",
        px: { xs: "4%", md: "6%", lg: "8%" },
        py: { xs: 7, md: 10 },
      }}
    >
      {/* subtle background  */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(900px 420px at 20% 15%, rgba(232,101,26,0.18) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 90% 35%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          borderRadius: { xs: "18px", md: "22px" },
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.10)",
          background:
            "linear-gradient(180deg, rgba(14,14,14,0.92) 0%, rgba(8,8,8,0.92) 100%)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow:
            "0 30px 90px rgba(0,0,0,0.75), 0 0 0 1px rgba(232,101,26,0.12)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "18%",
            right: "18%",
            height: "2.5px",
            background: `linear-gradient(90deg, transparent, ${ORANGE}CC, transparent)`,
            borderRadius: "0 0 10px 10px",
            pointerEvents: "none",
          }}
        />

        {/* layout  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LEFT: contact info */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              p: { xs: 3, sm: 4, md: 5 },
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "34px", sm: "40px", md: "46px" },
                letterSpacing: "-0.03em",
                color: "#fff",
                mb: 1.5,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "13.5px", md: "14.5px" },
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.70)",
                maxWidth: 560,
                mb: 4,
              }}
            >
              {description}
            </Typography>

            <Stack spacing={2.4}>
              <InfoRow
                label="LOCATION"
                value={locationText}
                action={
                  <Button
                    component="a"
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<ArrowOutwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      mt: 1.2,
                      width: "fit-content",
                      borderRadius: "12px",
                      px: 2,
                      py: 1,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      transition: "all .22s ease",
                      "&:hover": {
                        background: `${ORANGE}18`,
                        borderColor: `${ORANGE}55`,
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Get Directions
                  </Button>
                }
              />

              <InfoRow label="EMAIL" value={email} />
              <InfoRow label="CALL US" value={phone} />
            </Stack>

            <Divider sx={{ my: 3.5, borderColor: "rgba(255,255,255,0.08)" }} />

            <Stack direction="row" spacing={1.1} sx={{ flexWrap: "wrap" }}>
              <Social
                href={socials.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
              <Social
                href={socials.instagram}
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <Social href={socials.x} label="X" icon={<XIcon />} />
              <Social
                href={socials.facebook}
                label="Facebook"
                icon={<FacebookIcon />}
              />
            </Stack>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "1px" },
              height: { xs: "1px", md: "auto" },
              background: "rgba(255,255,255,0.10)",
            }}
          />

          {/* RIGHT: form */}
          <Box
            component="form"
            onSubmit={submit}
            sx={{
              flex: 1.15,
              minWidth: 0,
              p: { xs: 3, sm: 4, md: 5 },
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                color: "#fff",
                letterSpacing: "-0.02em",
                mb: 2.5,
              }}
            >
              Send a message
            </Typography>

            <Stack spacing={2}>
              {/* Name + Phone */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <FFIField
                  placeholder="Name"
                  value={form.name}
                  onChange={set("name")}
                />
                <FFIField
                  placeholder="Phone"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </Stack>

              <FFIField
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={set("email")}
              />

              <FFIField
                placeholder="Message"
                value={form.message}
                onChange={set("message")}
                multiline
                minRows={5}
                pill={false}
              />

              <Button
                type="submit"
                sx={{
                  mt: 0.5,
                  borderRadius: "12px",
                  py: 1.35,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: `linear-gradient(135deg, ${ORANGE} 0%, #bf5410 100%)`,
                  boxShadow: `0 10px 34px ${ORANGE}40`,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all .25s ease",
                  "&:hover": {
                    boxShadow: `0 16px 44px ${ORANGE}55`,
                    transform: "translateY(-1px)",
                  },
                  "&:active": { transform: "translateY(0px)" },
                }}
              >
                Send Message
              </Button>

              <Typography
                sx={{
                  mt: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.06em",
                }}
              >
                We typically respond within 24 hours.
              </Typography>
            </Stack>

            {/* right-side */}
            <Box
              sx={{
                position: "absolute",
                top: -120,
                right: -160,
                width: 420,
                height: 420,
                pointerEvents: "none",
                background:
                  "radial-gradient(circle, rgba(232,101,26,0.18) 0%, rgba(0,0,0,0) 65%)",
                filter: "blur(2px)",
              }}
            />
          </Box>
        </Box>

        {/* bottom line */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "1px",
            background: "rgba(255,255,255,0.08)",
          }}
        />
      </Box>
    </Box>
  );
}

function InfoRow({
  label,
  value,
  action,
}: {
  label: string;
  value: string;
  action?: React.ReactNode;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.42)",
          mb: 1,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: { xs: "16px", md: "18px" },
          color: "#fff",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}
      >
        {value}
      </Typography>

      {action}
    </Box>
  );
}

function Social({
  href = "#",
  icon,
  label,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      sx={{
        width: 44,
        height: 44,
        borderRadius: "14px",
        color: "rgba(255,255,255,0.75)",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        transition: "all .22s ease",
        "&:hover": {
          color: "#fff",
          background: "rgba(255,255,255,0.06)",
          borderColor: "rgba(232,101,26,0.40)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}

function FFIField({
  pill = true,
  ...props
}: {
  pill?: boolean;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  type?: string;
  multiline?: boolean;
  minRows?: number;
}) {
  return (
    <TextField
      {...props}
      variant="outlined"
      fullWidth
      InputProps={{
        sx: {
          borderRadius: pill ? "999px" : "16px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.14)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.22)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${ORANGE}`,
            borderWidth: "2px",
          },
          "& input, & textarea": {
            color: "#fff",
            fontWeight: 700,
          },
        },
      }}
      sx={{
        "& .MuiInputBase-input::placeholder": {
          color: "rgba(255,255,255,0.45)",
          opacity: 1,
          fontWeight: 700,
        },
        "& textarea::placeholder": {
          color: "rgba(255,255,255,0.45)",
          opacity: 1,
          fontWeight: 700,
        },
      }}
    />
  );
}
