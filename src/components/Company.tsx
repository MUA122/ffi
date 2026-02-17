import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import OurPartnersMarquee from "./OurPartnersMarquee";

const ORANGE = "#E8651A";

type ValueCard = {
  title: string;
  body: string;
};

type BoardMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export default function CompanySection() {
  const heroBg = "/assets/company_her.jpg";
  const aboutImg = "/assets/company_hero.jpg";

  const values: ValueCard[] = [
    {
      title: "Vision",
      body: "To deliver bold, future-proof construction services with world-class standards—tailored for both local and global needs through integrated execution.",
    },
    {
      title: "Mission",
      body: "Build elite teams and deliver end-to-end infrastructure solutions with transparency, speed, and financial efficiency—creating long-term impact.",
    },
    {
      title: "Goals",
      body: "Drive creative delivery, adopt the latest innovations, and accelerate growth through integrated workflows that reduce cost without compromising quality.",
    },
  ];

  const board: BoardMember[] = [
    {
      name: "Fathi Fouad Itani",
      role: "CEO",
      image: "/assets/ffi_img.jpg",
      bio: "Entered the business world during his final college year and became a sought-after strategist. Leads expert teams across construction and infrastructure aligned with KSA Vision 2030.",
    },
    {
      name: "Abdulaal Sultan",
      role: "Executive Manager",
      image: "/assets/as_img.jpg",
      bio: "Drives long-term growth through effective supervision and cost-efficient execution. Strong leadership with proven improvements in resource management and delivery quality.",
    },
    {
      name: "Georges A. Chebli",
      role: "Operations Director",
      image: "/assets/gac_img.jpg",
      bio: "Senior director with extensive experience in urban design and operations. Strong in coordination, QA, cost control, value engineering, and complex project execution.",
    },
  ];
  const partners = [
    { src: "/assets/par1.png", alt: "Partner 1" },
    { src: "/assets/par2.png", alt: "Partner 2" },
    { src: "/assets/par3.png", alt: "Partner 3" },
    { src: "/assets/par4.png", alt: "Partner 4" },
  ];

  return (
    <Box id="company" sx={{ width: "100%", bgcolor: "#000" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 0, md: "28px" },
          mx: { xs: 0, md: "auto" },
          maxWidth: { xs: "100%", md: "min(1500px, 94vw)" },
          mt: { xs: 0, md: 4 },
          minHeight: { xs: 420, md: 560 },
          isolation: "isolate",
        }}
      >
        {/* bg image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.05) brightness(0.65) saturate(1.1)",
            transform: "scale(1.05)",
          }}
        />
        {/* gradients */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 15% 20%, rgba(232,101,26,0.38) 0%, rgba(0,0,0,0) 55%), radial-gradient(700px 500px at 85% 30%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.80) 100%)",
          }}
        />
        {/* grain */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            mixBlendMode: "overlay",
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')",
          }}
        />

        {/* content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: "7%", md: "8%" },
            pt: { xs: 16, md: 18 },
            pb: { xs: 6, md: 8 },
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ maxWidth: 980 }}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 950,
                letterSpacing: "-0.02em",
                color: "#fff",
                fontSize: { xs: 42, sm: 56, md: 82 },
                lineHeight: 0.95,
              }}
            >
              Company
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.82)",
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: 14.5, md: 18 },
                lineHeight: 1.8,
                maxWidth: 760,
              }}
            >
              FFI builds high-impact infrastructure and modern construction
              solutions — engineered with precision, executed with speed,
              delivered with premium quality.
            </Typography>

            <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap", mt: 3 }}>
              <Chip text="Construction" />
              <Chip text="Infrastructure" />
              <Chip text="Renovation" />
              <Chip text="KSA Vision 2030" accent />
            </Box>

            <Box sx={{ mt: 4, display: "flex", gap: 1.3, flexWrap: "wrap" }}>
              <Button
                href="/contact"
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${ORANGE}, #bf5410)`,
                  borderRadius: "14px",
                  px: 2.8,
                  py: 1.2,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  boxShadow: `0 18px 60px ${ORANGE}22`,
                }}
              >
                Get in touch
              </Button>

              <Button
                href="/projects"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.86)",
                  borderRadius: "14px",
                  px: 2.8,
                  py: 1.2,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.42)",
                    background: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                View projects
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <SectionWrap>
        <Divider
          sx={{
            height: 3,
            border: "none",
            margin: 5,
            background:
              "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
          }}
        />{" "}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3.5, md: 5 },
            alignItems: "stretch",
          }}
        >
          <Glass
            sx={{
              flex: "1 1 520px",
              minWidth: { xs: "100%", md: 520 },
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 950,
                color: "#fff",
                fontSize: { xs: 26, md: 34 },
                letterSpacing: "-0.01em",
              }}
            >
              About FFI
            </Typography>

            <Box
              sx={{
                mt: 2,
                width: 64,
                height: 3,
                borderRadius: 999,
                background: `linear-gradient(90deg, ${ORANGE}, transparent)`,
              }}
            />

            <Typography
              sx={{
                mt: 3,
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 14.5, md: 15.5 },
                lineHeight: 1.95,
              }}
            >
              We are licensed to deliver a wide range of services including
              telecommunications networks, infrastructure, roads & bridges,
              sewage and water supply networks, excavation, development plans,
              urban drainage, landscaping, sidewalks & lighting, railways,
              tunnels, dams, electromechanical works, and security
              systems—supported by documentation, supervision, and testing.
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 1.2,
                flexWrap: "wrap",
              }}
            >
              <MiniStat k="15+" v="Years" />
              <MiniStat k="120+" v="Projects" />
              <MiniStat k="24/7" v="Support" />
            </Box>
          </Glass>

          <Box
            sx={{
              flex: "1 1 520px",
              minWidth: { xs: "100%", md: 520 },
              borderRadius: "22px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 26px 90px rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box
              component="img"
              src={aboutImg}
              alt="FFI About"
              sx={{
                width: "100%",
                height: { xs: 320, md: 460 },
                objectFit: "cover",
                display: "block",
                filter: "contrast(1.05) saturate(1.05)",
                transform: "scale(1.02)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 18,
                bottom: 18,
                right: 18,
                borderRadius: "18px",
                p: 2.2,
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(14px)",
              }}
            >
              <Typography sx={{ fontWeight: 900, color: "#fff", fontSize: 16 }}>
                Premium execution. Real results.
              </Typography>
              <Typography
                sx={{
                  mt: 0.7,
                  color: "rgba(255,255,255,0.72)",
                  fontSize: 13.5,
                }}
              >
                Quality control, cost efficiency, and on-time delivery — without
                compromises.
              </Typography>
            </Box>
          </Box>
        </Box>
      </SectionWrap>
      <SectionWrap>
        <Divider
          sx={{
            height: 3,
            border: "none",
            margin: 5,
            background:
              "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
          }}
        />{" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 950,
                fontSize: { xs: 26, md: 34 },
              }}
            >
              What drives us
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "rgba(255,255,255,0.70)",
                maxWidth: 680,
                lineHeight: 1.85,
              }}
            >
              Three pillars that shape how we operate, deliver, and scale.
            </Typography>
          </Box>
          <Box
            sx={{
              width: 120,
              height: 2,
              borderRadius: 999,
              background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
              opacity: 0.9,
            }}
          />
        </Box>
        <Box
          sx={{
            mt: 3.5,
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {values.map((v, idx) => (
            <ValueNeoCard
              key={v.title}
              title={v.title}
              body={v.body}
              index={idx + 1}
            />
          ))}
        </Box>
      </SectionWrap>
      <SectionWrap sx={{ pb: { xs: 10, md: 14 } }}>
        <Divider
          sx={{
            height: 3,
            border: "none",
            margin: 5,
            background:
              "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
          }}
        />{" "}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 1000,
              color: "#fff",
              fontSize: { xs: 40, md: 62 },
              letterSpacing: "-0.02em",
            }}
          >
            Board
          </Typography>
          <Typography sx={{ mt: 1.2, color: "rgba(255,255,255,0.70)" }}>
            The leadership team behind FFI’s execution excellence.
          </Typography>
          <Box
            sx={{
              mt: 2.5,
              mx: "auto",
              width: 110,
              height: 3,
              borderRadius: 999,
              background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
            }}
          />
        </Box>
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {board.map((m) => (
            <BoardCard key={m.name} member={m} />
          ))}
        </Box>
      </SectionWrap>
      <OurPartnersMarquee partners={partners} speedSeconds={10} />
      <Divider
        sx={{
          height: 3,
          border: "none",
          margin: 5,
          background:
            "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
        }}
      />{" "}
    </Box>
  );
}

function SectionWrap({
  children,
  sx,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
}) {
  return (
    <Box
      sx={{
        maxWidth: "min(1500px, 94vw)",
        mx: "auto",
        px: { xs: 0, md: 0 },
        mt: { xs: 6, md: 9 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Glass({ children, sx }: { children: React.ReactNode; sx?: any }) {
  return (
    <Box
      sx={{
        borderRadius: "22px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        position: "relative",
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* glow */}
      <Box
        sx={{
          position: "absolute",
          inset: -2,
          background:
            "radial-gradient(500px 260px at 20% 20%, rgba(232,101,26,0.18) 0%, rgba(0,0,0,0) 55%)",
          pointerEvents: "none",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}

function Chip({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <Box
      sx={{
        px: 1.6,
        py: 0.9,
        borderRadius: "999px",
        background: accent ? `${ORANGE}22` : "rgba(255,255,255,0.10)",
        border: accent
          ? `1px solid ${ORANGE}55`
          : "1px solid rgba(255,255,255,0.14)",
        color: accent ? "#fff" : "rgba(255,255,255,0.82)",
        fontWeight: 800,
        fontSize: 12,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        backdropFilter: "blur(10px)",
      }}
    >
      {text}
    </Box>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <Box
      sx={{
        flex: "0 0 auto",
        borderRadius: "16px",
        px: 2,
        py: 1.4,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(0,0,0,0.30)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Typography
        sx={{ color: "#fff", fontWeight: 950, fontSize: 18, lineHeight: 1 }}
      >
        {k}
      </Typography>
      <Typography
        sx={{
          mt: 0.6,
          color: "rgba(255,255,255,0.62)",
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {v}
      </Typography>
    </Box>
  );
}

function ValueNeoCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <Box
      sx={{
        flex: "1 1 340px",
        minWidth: { xs: "100%", sm: 340 },
        borderRadius: "22px",
        p: { xs: 3, md: 3.5 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.55)",
        position: "relative",
        overflow: "hidden",
        transition: "transform .25s ease, border-color .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: `${ORANGE}55`,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ORANGE}25 0%, rgba(0,0,0,0) 65%)`,
          filter: "blur(1px)",
          pointerEvents: "none",
        }}
      />
      <Typography
        sx={{
          color: `${ORANGE}`,
          fontWeight: 950,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontSize: 12,
        }}
      >
        0{index}
      </Typography>
      <Typography
        sx={{
          mt: 1,
          color: "#fff",
          fontWeight: 1000,
          fontSize: 26,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: "rgba(255,255,255,0.78)",
          lineHeight: 1.9,
          fontSize: 14.5,
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <Box
      sx={{
        flex: "1 1 360px",
        minWidth: { xs: "100%", sm: 360 },
        borderRadius: "22px",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 26px 90px rgba(0,0,0,0.60)",
        background: "rgba(255,255,255,0.06)",
        transition: "transform .25s ease, border-color .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: `${ORANGE}55`,
        },
        "&:hover .bio": { opacity: 1, transform: "translateY(0px)" },
        "&:hover .shade": { opacity: 0.75 },
      }}
    >
      {/* image */}
      <Box
        component="img"
        src={member.image}
        alt={member.name}
        sx={{
          width: "100%",
          height: { xs: 420, md: 520 },
          objectFit: "cover",
          display: "block",
          filter: "contrast(1.05) saturate(1.05)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: 14,
          right: 14,
          bottom: 14,
          borderRadius: "18px",
          px: 2.2,
          py: 1.8,
          background: "rgba(0,0,0,0.55)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px)",
          zIndex: 3,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 1000,
            fontSize: 18,
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            mt: 0.8,
            color: ORANGE,
            fontWeight: 900,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {member.role}
        </Typography>
      </Box>

      <Box
        className="shade"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.90) 100%)",
          opacity: 0.55,
          transition: "opacity .25s ease",
          zIndex: 2,
        }}
      />

      <Box
        className="bio"
        sx={{
          position: "absolute",
          left: 14,
          right: 14,
          top: 14,
          borderRadius: "18px",
          p: 2.2,
          background: "rgba(0,0,0,0.62)",
          border: `1px solid rgba(255,255,255,0.12)`,
          backdropFilter: "blur(16px)",
          color: "rgba(255,255,255,0.86)",
          zIndex: 4,
          opacity: { xs: 1, md: 0 },
          transform: { xs: "translateY(0px)", md: "translateY(10px)" },
          transition: "opacity .25s ease, transform .25s ease",
        }}
      >
        <Typography
          sx={{
            fontWeight: 1000,
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Bio
        </Typography>
        <Typography sx={{ mt: 1, lineHeight: 1.85, fontSize: 14.2 }}>
          {member.bio}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: -80,
          background: `radial-gradient(340px 260px at 20% 20%, ${ORANGE}20 0%, rgba(0,0,0,0) 60%)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
