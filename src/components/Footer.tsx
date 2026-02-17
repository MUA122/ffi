import {
  Box,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";

const ORANGE = "#E8651A";

export default function FFIFooter() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#050505",
        color: "#fff",
        mt: 10,
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />

      <Box
        sx={{
          px: { xs: "6%", md: "10%" },
          py: { xs: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {/* ---------- TOP SECTION ---------- */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Box sx={{ flex: "1 1 260px", minWidth: 250 }}>
            <Box
              component="img"
              src="/assets/ffi_logo.png"
              alt="FFI"
              sx={{ height: 50 }}
            />

            <Typography sx={{ mt: 2, opacity: 0.7, fontSize: 14 }}>
              Premium construction solutions built to last.
            </Typography>

            {/* Socials */}
            <Box sx={{ display: "flex", gap: 1.2, mt: 2 }}>
              <SocialIcon icon={<FacebookRoundedIcon />} />
              <SocialIcon icon={<InstagramIcon />} />
              <SocialIcon icon={<XIcon />} />
              <SocialIcon icon={<LinkedInIcon />} />
              <SocialIcon icon={<YouTubeIcon />} />
              <SocialIcon icon={<MusicNoteRoundedIcon />} />
            </Box>
          </Box>

          {/* Services */}
          <FooterColumn
            title="Services"
            items={["Construction", "Infrastructure", "Renovation"]}
          />

          {/* Support */}
          <FooterColumn title="Support" items={["FAQ", "Contact Us"]} />

          {/* Contact */}
          <Box sx={{ flex: "1 1 260px", minWidth: 250 }}>
            <Typography sx={titleStyle}>Get in touch</Typography>

            <InfoRow
              icon={<LocationOnRoundedIcon />}
              text="6859, Jeddah Kingdom of Saudi Arabia"
            />
            <InfoRow
              icon={<EmailRoundedIcon />}
              text="info@fficontracting.com"
            />
            <InfoRow icon={<PhoneRoundedIcon />} text="+966558513312" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          <Box
            sx={{
              flex: "1 1 380px",
              minWidth: 300,
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              p: 3,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography sx={titleStyle}>Contact form</Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
              <ModernField label="Name" />
              <ModernField label="Email" />
              <ModernField label="Phone" />

              <Button
                variant="contained"
                sx={{
                  background: ORANGE,
                  py: 1.2,
                  borderRadius: "12px",
                  fontWeight: 700,
                  "&:hover": { background: "#f07520" },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          {/* Map */}
          <Box
            sx={{
              flex: "1 1 380px",
              minWidth: 300,
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Jeddah%20Saudi%20Arabia&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            opacity: 0.6,
            fontSize: 13,
          }}
        >
          <Typography>
            © {new Date().getFullYear()} FFI Contracting. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit" underline="none">
              Privacy
            </Link>
            <Link href="#" color="inherit" underline="none">
              Terms
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const titleStyle = {
  fontWeight: 700,
  fontSize: 18,
  mb: 2,
};

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <Box sx={{ flex: "1 1 180px", minWidth: 160 }}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {items.map((item) => (
          <Typography key={item} sx={{ opacity: 0.7, fontSize: 14 }}>
            • {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function InfoRow({ icon, text }: any) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.2 }}>
      {icon}
      <Typography sx={{ opacity: 0.7, fontSize: 14 }}>{text}</Typography>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SocialIcon({ icon }: any) {
  return (
    <IconButton
      sx={{
        width: 42,
        height: 42,
        borderRadius: "12px",
        background: "rgba(255,255,255,0.06)",
        color: "#fff",
        "&:hover": {
          background: ORANGE,
        },
      }}
    >
      {icon}
    </IconButton>
  );
}

function ModernField({ label }: { label: string }) {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          background: "rgba(255,255,255,0.04)",
          color: "#fff",
          "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
          "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
        },
        "& label": { color: "rgba(255,255,255,0.6)" },
      }}
    />
  );
}
