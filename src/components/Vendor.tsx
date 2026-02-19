import { Box, Chip, Stack, Typography } from "@mui/material";

const ORANGE = "#E8651A";

type Partner = {
  src: string;
  alt: string;
  href?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  partners?: Partner[];
};

export default function VendorsPage({
  title = "Vendors",
  subtitle = "We collaborate with trusted partners to deliver premium quality and reliable execution across every project.",
  partners = [
    { src: "/assets/par1.png", alt: "Partner 1" },
    { src: "/assets/par2.png", alt: "Partner 2" },
    { src: "/assets/par3.png", alt: "Partner 3" },
    { src: "/assets/par4.png", alt: "Partner 4" },
    { src: "/assets/par5.png", alt: "Partner 5" },
    { src: "/assets/par6.png", alt: "Partner 6" },
    { src: "/assets/par7.png", alt: "Partner 7" },
    { src: "/assets/par8.png", alt: "Partner 8" },
    { src: "/assets/par9.png", alt: "Partner 9" },
  ],
}: Props) {
  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh" }}>
      <Box
        sx={{
          px: { xs: "4%", md: "6%", lg: "8%" },
          pt: { xs: 2, md: 3 },
          pb: { xs: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: { xs: "22px", md: "28px" },
            overflow: "hidden",
            minHeight: { xs: 320, md: 420 },
            boxShadow:
              "0 30px 90px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.10)",
            backgroundImage: "url(/assets/ven_ai.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.18) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(900px 520px at 20% 35%, rgba(232,101,26,0.22) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
            }}
          />

          <Stack
            spacing={2.2}
            sx={{
              position: "relative",
              height: "100%",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 6 },
              justifyContent: "center",
              maxWidth: { md: 950 },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 950,
                letterSpacing: "-0.02em",
                fontSize: { xs: 42, md: 64 },
                lineHeight: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                maxWidth: 720,
              }}
            >
              {subtitle}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {[
                "Trusted",
                "Long-term",
                "High Standards",
                "Premium Delivery",
              ].map((t) => (
                <Chip
                  key={t}
                  label={t}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontWeight: 800,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    height: 34,
                    borderRadius: 999,
                    "& .MuiChip-label": { px: 1.6, fontSize: 11 },
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: "4%", md: "6%", lg: "8%" },
          pb: { xs: 7, md: 10 },
        }}
      >
        <Stack
          spacing={1.5}
          sx={{
            mb: { xs: 3, md: 4 },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: 20, md: 26 },
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            OUR PARTNERS
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          sx={{
            gap: { xs: 2, sm: 2.5, md: 2 },
            justifyContent: "center",
          }}
        >
          {partners.map((p, idx) => (
            <Box
              key={`${p.alt}-${idx}`}
              sx={{
                flex: {
                  xs: "0 0 100%",
                  sm: "0 0 48%",
                  md: "0 0 23%",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "48%",
                  md: "50%",
                },
              }}
            >
              <VendorCard partner={p} index={idx} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function VendorCard({ partner, index }: { partner: Partner; index: number }) {
  const content = (
    <Box
      sx={{
        width: { xs: "min(92vw, 360px)", sm: 260, md: 300, lg: 320 },
        height: { xs: 120, sm: 130, md: 150 },
        borderRadius: { xs: "18px", md: "20px" },
        position: "relative",
        overflow: "hidden",
        cursor: partner.href ? "pointer" : "default",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
        transformStyle: "preserve-3d",
        transition:
          "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.01)",
          borderColor: "rgba(232,101,26,0.45)",
          boxShadow:
            "0 30px 110px rgba(0,0,0,0.75), 0 0 0 1px rgba(232,101,26,0.18)",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "18%",
          right: "18%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${ORANGE}CC, transparent)`,
          opacity: 0.8,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: -60,
          background:
            "radial-gradient(220px 180px at 25% 35%, rgba(232,101,26,0.22) 0%, rgba(0,0,0,0) 65%)",
          opacity: 0.8,
          transition: "opacity 300ms ease",
          pointerEvents: "none",
          ".card:hover &": { opacity: 1 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "-40%",
          left: "-60%",
          width: "70%",
          height: "180%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0) 100%)",
          transform: "rotate(18deg)",
          opacity: 0,
          transition: "all 420ms ease",
          pointerEvents: "none",
          ".card:hover &": {
            left: "110%",
            opacity: 1,
          },
        }}
      />

      {/* Logo */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2.5,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src={partner.src}
          alt={partner.alt}
          sx={{
            width: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: 0.9,
            filter: "grayscale(1) contrast(1.05) brightness(1.12)",
            transition: "all 300ms ease",
            ".card:hover &": {
              opacity: 1,
              filter: "grayscale(0) contrast(1.05) brightness(1.05)",
              transform: "translateY(-2px) scale(1.03)",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          opacity: 0,
          transform: "translateY(10px)",
          transition: "all 300ms ease",
          zIndex: 3,
          ".card:hover &": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.78)",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "78%",
          }}
        >
          {partner.alt}
        </Typography>

        <Chip
          label={`#${String(index + 1).padStart(2, "0")}`}
          sx={{
            height: 26,
            borderRadius: 999,
            bgcolor: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(255,255,255,0.12)",
            fontWeight: 900,
            "& .MuiChip-label": { px: 1.1, fontSize: 10 },
          }}
        />
      </Box>
    </Box>
  );

  const wrapped = (
    <Box className="card" sx={{ display: "inline-flex" }}>
      {content}
    </Box>
  );

  if (partner.href) {
    return (
      <Box
        component="a"
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        sx={{ textDecoration: "none", display: "inline-flex" }}
      >
        {wrapped}
      </Box>
    );
  }

  return wrapped;
}
