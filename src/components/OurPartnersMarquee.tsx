import { Box, Typography } from "@mui/material";

type Partner = {
  src: string;
  alt: string;
  href?: string;
};

type Props = {
  title?: string;
  partners: Partner[];
  speedSeconds?: number;
};

export default function OurPartnersMarquee({
  title = "OUR PARTNER",
  partners,
  speedSeconds = 28,
}: Props) {
  const row = [...partners, ...partners];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "#070707",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgcolor: "rgba(255,255,255,0.10)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgcolor: "rgba(255,255,255,0.10)",
        }}
      />

      {/* title */}
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
          fontSize: { xs: 13, md: 14 },
          letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.72)",
          textTransform: "uppercase",
          mb: { xs: 4, md: 5 },
        }}
      >
        {title}
      </Typography>

      {/* fade edges */}
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: { xs: 42, md: 120 },
          background:
            "linear-gradient(90deg, rgba(7,7,7,1) 0%, rgba(7,7,7,0) 100%)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: { xs: 42, md: 120 },
          background:
            "linear-gradient(270deg, rgba(7,7,7,1) 0%, rgba(7,7,7,0) 100%)",
          zIndex: 2,
        }}
      />

      {/* marquee track */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 1, md: 1.5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: { xs: 4, md: 7 },
            px: { xs: 4, md: 6 },
            animation: `partners-marquee ${speedSeconds}s linear infinite`,
            "@keyframes partners-marquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
          }}
        >
          {row.map((p, idx) => (
            <PartnerItem key={`${p.alt}-${idx}`} partner={p} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function PartnerItem({ partner }: { partner: Partner }) {
  const content = (
    <Box
      component="img"
      src={partner.src}
      alt={partner.alt}
      sx={{
        height: { xs: 85, sm: 95, md: 130 },
        width: "auto",
        maxWidth: { xs: 450, md: 550 },
        opacity: 0.92,
        filter: "grayscale(1) contrast(1.05) brightness(1.15)",
        transition: "all 0.25s ease",
        "&:hover": {
          opacity: 1,
          filter: "grayscale(0) contrast(1.05) brightness(1.05)",
          transform: "translateY(-1px)",
        },
      }}
    />
  );

  if (partner.href) {
    return (
      <Box
        component="a"
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        sx={{ display: "inline-flex", alignItems: "center" }}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box sx={{ display: "inline-flex", alignItems: "center" }}>{content}</Box>
  );
}
