import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  Collapse,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const ORANGE = "#E8651A";

type ServiceItem = {
  title: string;
  number: string;
  icon: React.ReactNode;
  desc: string;
};

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Design",
    icon: <ArchitectureOutlinedIcon />,
    desc: `The company has the qualified design personnel to conceptualize, innovate, create, and concretize ideas in architecture and engineering of any building structures and any horizontal projects such as land development, roads and bridges, piers, ports and harbors, and other marine structures.`,
  },
  {
    number: "02",
    title: "Renovation Works",
    icon: <ArchitectureOutlinedIcon />,
    desc: `We deal with all types of renovation works as well as expansion of projects (Royal Residential, commercial) by providing our clients with the best possible economical solutions while maintaining our work excellence and making it our trademark.`,
  },
  {
    number: "03",
    title: "Construction",
    icon: <ConstructionOutlinedIcon />,
    desc: `This is the bread and butter of the company. We can confidently undertake the construction of all types of buildings, roads and highways including bridges, land development, reclamation and marine structures, and industrial projects.`,
  },
  {
    number: "04",
    title: "Project Management",
    icon: <EngineeringOutlinedIcon />,
    desc: `The company has a group of well-trained managers and engineers with outstanding leadership that can handle and hand over projects on time at a reasonable cost. Our management will include construction supervision, quality assurance and control, safety, procurement, equipment and logistics, budget control, human resources, planning and monitoring, technical research and engineering.`,
  },
  {
    number: "05",
    title: "Finishing Works",
    icon: <HandymanOutlinedIcon />,
    desc: `Architectural and finishing services are big part of our business and field of expertise. We have proudly dealt some high profile clients and delivered them outstanding and remarkable royal finishing jobs with high quality and excellence. We have a large experience in the following types of finishing works.`,
  },
  {
    number: "06",
    title: "Concrete Work",
    icon: <LayersOutlinedIcon />,
    desc: `Concrete works have been our specialty. We have completed different types of grey structures at various locations and have achieved significant milestones. Our concrete solution team is highly productive and can attain high quality of concrete finishes regardless of the nature and diversity of the structure.`,
  },
  {
    number: "07",
    title: "Excavation & Shoring Work",
    icon: <FoundationOutlinedIcon />,
    desc: `FFI has an extensive array of machinery and equipment suitable to complete any earth moving needs. All our machinery is kept in excellent condition ensuring safety and precision. FFI offers a diversity of excavation, trenching, pot-holing, footings and pier holes. Our technical experts are providing economical designs and execution solutions for diverse type of shoring and load bearing piles.`,
  },
  {
    number: "08",
    title: "Project Study",
    icon: <SchoolOutlinedIcon />,
    desc: `In an attempt to provide solutions to clientele’s query and requirements, FFI Contracting can supply competent consultants and engineers to “pool-in” and initiate feasibility studies to identify the real issues and problems. Then, provide answers and solutions that will be practical, financially viable, environmentally safe, and protective to life and property.`,
  },
];

type Phase = {
  label: string;
  title: string;
  desc: string;
};

const phases: Phase[] = [
  {
    label: "Phase 1",
    title: "Project Scheduling",
    desc: `FFI Contracting provides a system for schedule development and continuous monitoring, allowing for flexibility and encouraging communication. FFI project schedules are highly accurate in estimating construction times and are detailed in the amount of information we provide to the project team.`,
  },
  {
    label: "Phase 2",
    title: "Equipment and Materials",
    desc: `FFI Contracting is a successful, independent commercial general contractor. We are not merely a “middleman” for subcontractors; we are capable of performing the most critical tasks to drive the project schedule and set quality standards.`,
  },
  {
    label: "Phase 3",
    title: "Self-Performance",
    desc: `FFI Contracting is a successful, independent commercial general contractor. We are not merely a “middleman” for subcontractors; we are capable of performing the most critical tasks to drive the project schedule and set quality standards.`,
  },
  {
    label: "Phase 4",
    title: "Procurement",
    desc: `The Procurement department is responsible for sourcing all project requirements except human resources. It manages the research, submission, sampling, selection, purchase, and delivery of materials, tools, equipment, and other requirements.`,
  },
];

export default function ServicesPage() {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [openService, setOpenService] = useState<ServiceItem | null>(null);
  const [openPhase, setOpenPhase] = useState<string | null>(null);

  const constellation = useMemo(() => {
    const angleByNumber: Record<string, number> = {
      "01": 300,
      "02": 330,
      "03": 370,
      "04": 60,
      "05": 110,
      "06": 150,
      "07": 200,
      "08": -110,
    };

    return services.map((s, i) => ({
      ...s,
      angle: angleByNumber[s.number] ?? (i * 360) / services.length,
    }));
  }, []);

  return (
    <Box sx={{ background: "#000" }}>
      {/* HERO */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 5, lg: 7, xl: 10 },
          pt: { xs: 11, sm: 12, md: 13 },
          pb: { xs: 5, md: 7 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: { xs: "22px", md: "28px" },
            overflow: "hidden",
            minHeight: { xs: 360, md: 420, lg: 460 },
            boxShadow: "0 28px 90px rgba(0,0,0,0.65)",
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.86) 100%), url(/assets/service_ai.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: -2,
              background: `radial-gradient(900px 320px at 18% 18%, ${ORANGE}24, transparent 70%),
                           radial-gradient(700px 260px at 90% 30%, rgba(255,255,255,0.07), transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 6 },
              maxWidth: 980,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Inter',sans-serif",
                fontSize: { xs: 44, sm: 56, md: 68 },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#fff",
                lineHeight: 1.02,
              }}
            >
              Services
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                fontFamily: "'Inter',sans-serif",
                fontSize: { xs: 13, sm: 14, md: 15.5 },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                maxWidth: 720,
              }}
            >
              End-to-end contracting capabilities — from design and construction
              to procurement and project management — delivered with premium
              quality and strict execution standards.
            </Typography>

            {/* chips */}
            <Box sx={{ mt: 2.5, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {[
                "CONSTRUCTION",
                "INFRASTRUCTURE",
                "RENOVATION",
                "KSA VISION 2030",
              ].map((t) => (
                <Box
                  key={t}
                  sx={{
                    px: 1.6,
                    py: 0.75,
                    borderRadius: "999px",
                    fontSize: 11.5,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.82)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {t}
                </Box>
              ))}
            </Box>

            {/* buttons */}
            <Box sx={{ mt: 3.2, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                href="contact"
                sx={{
                  background: `linear-gradient(135deg, ${ORANGE} 0%, #bf5410 100%)`,
                  borderRadius: "12px",
                  px: 2.6,
                  py: 1.25,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: 12,
                  boxShadow: `0 10px 28px ${ORANGE}35`,
                  "&:hover": {
                    background: `linear-gradient(135deg, #f07520 0%, ${ORANGE} 100%)`,
                  },
                }}
              >
                Get in touch
              </Button>

              <Button
                variant="outlined"
                href="projects"
                sx={{
                  borderRadius: "12px",
                  px: 2.6,
                  py: 1.25,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(0,0,0,0.18)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.35)",
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
      <Divider
        sx={{
          height: 3,
          border: "none",
          margin: 5,
          background:
            "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
        }}
      />{" "}
      <SectionShell
        eyebrow="FFI CONTRACTING"
        title="What we deliver"
        subtitle="A complete contracting stack — engineered teams, disciplined execution, and reliable delivery."
      >
        {isMobile ? (
          <MobileServicesStrip
            items={services}
            onOpen={(s) => setOpenService(s)}
          />
        ) : (
          <ServicesConstellation
            items={constellation}
            onOpen={(s) => setOpenService(s)}
          />
        )}

        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            fontFamily: "'Inter',sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.06em",
          }}
        >
          Tip: Click any service to view full details.
        </Typography>
      </SectionShell>
      <Divider
        sx={{
          height: 3,
          border: "none",
          margin: 5,
          background:
            "linear-gradient(90deg, transparent, rgba(255, 103, 53, 0.84), transparent)",
        }}
      />{" "}
      <SectionShell
        eyebrow="PROCESS"
        title="Our Methodology"
        subtitle="A structured workflow that keeps quality, cost, and timelines under control."
      >
        <MethodologyTimeline
          phases={phases}
          openPhase={openPhase}
          setOpenPhase={setOpenPhase}
        />
      </SectionShell>
      <ServiceDialog
        open={!!openService}
        item={openService}
        onClose={() => setOpenService(null)}
      />
    </Box>
  );
}

function SectionShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7, xl: 10 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3.5, md: 4.5 } }}>
        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 12,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {eyebrow}
        </Typography>

        <Typography
          sx={{
            mt: 1.1,
            fontFamily: "'Inter',sans-serif",
            fontWeight: 950,
            letterSpacing: "-0.02em",
            fontSize: { xs: 28, sm: 34, md: 42 },
            color: "#fff",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 1.2,
            fontFamily: "'Inter',sans-serif",
            fontSize: { xs: 13.5, md: 14.5 },
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.70)",
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}

function ServicesConstellation({
  items,
  onOpen,
}: {
  items: (ServiceItem & { angle: number })[];
  onOpen: (item: ServiceItem) => void;
}) {
  const isLg = useMediaQuery("(min-width:1200px)");
  const isMd = useMediaQuery("(min-width:900px)");

  const baseRadius = isLg ? 360 : isMd ? 330 : 300;

  const ringOffset = isLg ? 70 : isMd ? 60 : 50;

  const minInnerRadius = isLg ? 260 : isMd ? 240 : 220;

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 1200,
        mx: "auto",
        borderRadius: "28px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(900px 420px at 50% 40%, rgba(255,255,255,0.06), rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.65) 100%)",
        boxShadow: "0 30px 110px rgba(0,0,0,0.70)",
        py: 7,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 360px at 25% 25%, ${ORANGE}18, transparent 65%),
                       radial-gradient(900px 360px at 80% 70%, rgba(255,255,255,0.06), transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", height: { md: 880, lg: 960 } }}>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 230,
            height: 230,
            borderRadius: "999px",
            background:
              "radial-gradient(140px 140px at 35% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0.03) 55%, rgba(0,0,0,0.55) 100%)",
            border: `1px solid rgba(255,255,255,0.10)`,
            boxShadow: `0 30px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 3,
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 950,
              fontSize: 34,
              letterSpacing: "0.12em",
              color: "#fff",
            }}
          >
            FFI
          </Typography>
          <Typography
            sx={{
              mt: 0.5,
              fontFamily: "'Inter',sans-serif",
              fontSize: 12,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.62)",
            }}
          >
            Contracting
          </Typography>

          <Box
            sx={{
              mt: 1.8,
              height: 3,
              width: 90,
              borderRadius: "999px",
              background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
              opacity: 0.85,
            }}
          />

          <Typography
            sx={{
              mt: 1.5,
              fontFamily: "'Inter',sans-serif",
              fontSize: 12.5,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.62)",
            }}
          >
            Tap a service node to view details.
          </Typography>
        </Box>

        {/* ring */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: baseRadius * 2 + 220,
            height: baseRadius * 2 + 220,
            borderRadius: "999px",
            border: "1px dashed rgba(255,255,255,0.10)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />

        {items.map((s, idx) => {
          const rad = (s.angle * Math.PI) / 180;

          const candidate =
            baseRadius + (idx % 2 === 0 ? ringOffset : -ringOffset);

          const r = Math.max(candidate, minInnerRadius);

          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <Box
              key={s.number}
              onClick={() => onOpen(s)}
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                cursor: "pointer",
                width: { md: 240, lg: 260 },
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.50)",
                overflow: "hidden",
                transition:
                  "transform .22s ease, border-color .22s ease, background .22s ease",
                zIndex: 3,
                "&:hover": {
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.02)`,
                  borderColor: `${ORANGE}55`,
                  background: "rgba(255,255,255,0.06)",
                },
              }}
            >
              <Box sx={{ p: 2, position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(520px 210px at 20% 10%, ${ORANGE}18, transparent 60%)`,
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        "& svg": { fontSize: 22 },
                      }}
                    >
                      {s.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "'Inter',sans-serif",
                        fontWeight: 950,
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.30)",
                        fontSize: 12,
                      }}
                    >
                      {s.number}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Inter',sans-serif",
                      fontWeight: 950,
                      fontSize: 16,
                      letterSpacing: "-0.01em",
                      color: "#fff",
                    }}
                  >
                    {s.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.8,
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 12.5,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.68)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {s.desc}
                  </Typography>

                  <Box
                    sx={{
                      mt: 1.4,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        height: 2,
                        flex: 1,
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.08)",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Inter',sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      View details
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  height: 3,
                  background: `linear-gradient(90deg, transparent 0%, ${ORANGE} 40%, transparent 100%)`,
                  opacity: 0.55,
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function MobileServicesStrip({
  items,
  onOpen,
}: {
  items: ServiceItem[];
  onOpen: (item: ServiceItem) => void;
}) {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        borderRadius: "22px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(700px 320px at 30% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.7) 100%)",
        boxShadow: "0 24px 90px rgba(0,0,0,0.70)",
      }}
    >
      <Box sx={{ p: 2.2 }}>
        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 950,
            fontSize: 16,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          Tap to explore services
        </Typography>

        <Box
          sx={{
            mt: 1.6,
            display: "flex",
            gap: 1.2,
            overflowX: "auto",
            pb: 1,
            "&::-webkit-scrollbar": { height: 6 },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.12)",
              borderRadius: 999,
            },
          }}
        >
          {items.map((s) => (
            <Box
              key={s.number}
              onClick={() => onOpen(s)}
              sx={{
                minWidth: 240,
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 16px 45px rgba(0,0,0,0.55)",
                p: 1.8,
                cursor: "pointer",
                transition: "transform .2s ease, border-color .2s ease",
                "&:active": { transform: "scale(0.99)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    "& svg": { fontSize: 21 },
                  }}
                >
                  {s.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: 950,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.30)",
                    fontSize: 12,
                  }}
                >
                  {s.number}
                </Typography>
              </Box>

              <Typography
                sx={{
                  mt: 1.2,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 950,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                {s.title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.7,
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 12.5,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.68)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {s.desc}
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                View details
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${ORANGE} 50%, transparent 100%)`,
          opacity: 0.55,
        }}
      />
    </Box>
  );
}

function MethodologyTimeline({
  phases,
  openPhase,
  setOpenPhase,
}: {
  phases: Phase[];
  openPhase: string | null;
  setOpenPhase: (v: string | null) => void;
}) {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Box
        sx={{
          borderRadius: "28px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(900px 420px at 20% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.75) 100%)",
          boxShadow: "0 30px 110px rgba(0,0,0,0.70)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(900px 360px at 25% 25%, ${ORANGE}14, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        <Box sx={{ position: "relative", p: { xs: 2.2, md: 3 } }}>
          {/* vertical line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 26, md: 34 },
              top: 28,
              bottom: 28,
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
              borderRadius: 999,
              opacity: 0.9,
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
            {phases.map((p, idx) => {
              const expanded = openPhase === p.label;
              return (
                <Box
                  key={p.label}
                  sx={{
                    position: "relative",
                    pl: { xs: 5.5, md: 7 },
                  }}
                >
                  {/* node */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: 17, md: 25 },
                      top: 14,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: expanded ? ORANGE : "rgba(255,255,255,0.18)",
                      boxShadow: expanded ? `0 0 0 6px ${ORANGE}22` : "none",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />

                  <Box
                    sx={{
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      boxShadow: "0 18px 60px rgba(0,0,0,0.55)",
                      overflow: "hidden",
                      transition:
                        "border-color .22s ease, background .22s ease, transform .22s ease",
                      "&:hover": {
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.18)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ p: 2.2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "'Inter',sans-serif",
                              fontSize: 11.5,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.55)",
                              fontWeight: 900,
                            }}
                          >
                            {p.label}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.7,
                              fontFamily: "'Inter',sans-serif",
                              fontWeight: 950,
                              fontSize: 17,
                              color: "#fff",
                            }}
                          >
                            {p.title}
                          </Typography>
                        </Box>

                        <Button
                          onClick={() =>
                            setOpenPhase(expanded ? null : p.label)
                          }
                          variant="outlined"
                          size="small"
                          sx={{
                            borderRadius: "12px",
                            px: 1.6,
                            py: 0.9,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            fontSize: 11,
                            color: "rgba(255,255,255,0.82)",
                            borderColor: expanded
                              ? `${ORANGE}55`
                              : "rgba(255,255,255,0.20)",
                            background: expanded
                              ? `${ORANGE}12`
                              : "rgba(0,0,0,0.18)",
                            "&:hover": {
                              borderColor: expanded
                                ? `${ORANGE}80`
                                : "rgba(255,255,255,0.35)",
                              background: expanded
                                ? `${ORANGE}18`
                                : "rgba(255,255,255,0.06)",
                            },
                          }}
                        >
                          {expanded ? "Hide" : "Read more"}
                        </Button>
                      </Box>

                      {/* short preview */}
                      <Typography
                        sx={{
                          mt: 1.2,
                          fontFamily: "'Inter',sans-serif",
                          fontSize: 12.8,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.68)",
                          display: "-webkit-box",
                          WebkitLineClamp: expanded ? "unset" : 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {p.desc}
                      </Typography>

                      <Collapse in={expanded} timeout={240}>
                        <Box sx={{ mt: 1.2 }}>
                          <Box
                            sx={{
                              height: 1,
                              background: "rgba(255,255,255,0.10)",
                              borderRadius: 999,
                              mb: 1.2,
                            }}
                          />

                          <Typography
                            sx={{
                              fontFamily: "'Inter',sans-serif",
                              fontSize: 12.8,
                              lineHeight: 1.75,
                              color: "rgba(255,255,255,0.70)",
                            }}
                          >
                            {p.desc}
                          </Typography>
                        </Box>
                      </Collapse>
                    </Box>

                    <Box
                      sx={{
                        height: 3,
                        background:
                          idx === phases.length - 1
                            ? `linear-gradient(90deg, transparent 0%, ${ORANGE} 50%, transparent 100%)`
                            : `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.40) 50%, transparent 100%)`,
                        opacity: idx === phases.length - 1 ? 0.55 : 0.28,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ServiceDialog({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: ServiceItem | null;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, rgba(20,20,20,0.98), rgba(5,5,5,0.95))",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 140px rgba(0,0,0,0.80)",
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(6px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          px: 2.3,
          py: 2,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(700px 240px at 25% 10%, ${ORANGE}20, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.3,
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                flexShrink: 0,
                "& svg": { fontSize: 22 },
              }}
            >
              {item?.icon}
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <DialogTitle
                sx={{
                  p: 0,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 950,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                }}
              >
                {item?.title ?? ""}
              </DialogTitle>

              <Typography
                sx={{
                  mt: 0.3,
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 11.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.50)",
                  fontWeight: 900,
                }}
              >
                Service {item?.number ?? ""}
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              color: "rgba(255,255,255,0.70)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              "&:hover": {
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <DialogContent sx={{ p: 2.3 }}>
        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 13.5,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {item?.desc ?? ""}
        </Typography>

        <Box
          sx={{
            mt: 2.2,
            height: 3,
            borderRadius: 999,
            background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
            opacity: 0.55,
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
