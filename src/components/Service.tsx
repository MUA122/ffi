import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  return (
    <Box sx={{ background: "#000" }}>
      {/* HERO */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 5, lg: 7, xl: 10 },
          pt: { xs: 11, sm: 12, md: 13 }, // under fixed header
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
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.82) 100%), url(/assets/company_hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* subtle glow */}
          <Box
            sx={{
              position: "absolute",
              inset: -2,
              background: `radial-gradient(900px 300px at 20% 15%, ${ORANGE}26, transparent 70%)`,
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
            <Box
              sx={{
                mt: 2.5,
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
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
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
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
                sx={{
                  background: `linear-gradient(135deg, ${ORANGE} 0%, #bf5410 100%)`,
                  borderRadius: "12px",
                  px: 2.6,
                  py: 1.25,
                  fontWeight: 800,
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
                sx={{
                  borderRadius: "12px",
                  px: 2.6,
                  py: 1.25,
                  fontWeight: 800,
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

      {/* FFI CONTRACTING */}
      <SectionShell
        eyebrow="FFI CONTRACTING"
        title="What we deliver"
        subtitle="A complete contracting stack — engineered teams, disciplined execution, and reliable delivery."
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1.8, md: 2.2 },
            justifyContent: "center",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.number} item={s} />
          ))}
        </Box>
      </SectionShell>

      {/* OUR METHODOLOGY */}
      <SectionShell
        eyebrow="PROCESS"
        title="Our Methodology"
        subtitle="A structured workflow that keeps quality, cost, and timelines under control."
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1.8, md: 2.2 },
            justifyContent: "center",
          }}
        >
          {phases.map((p) => (
            <PhaseCard key={p.label} phase={p} />
          ))}
        </Box>
      </SectionShell>
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
            fontWeight: 900,
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
            maxWidth: 860,
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

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "calc(50% - 12px)",
          md: "calc(33.333% - 16px)",
          lg: "calc(25% - 16px)",
        },
        minWidth: { xs: "auto", sm: 260 },
        borderRadius: "18px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        transition:
          "transform .25s ease, border-color .25s ease, background .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: `${ORANGE}55`,
          background: "rgba(255,255,255,0.06)",
        },
      }}
    >
      {/* top glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(600px 240px at 20% 10%, ${ORANGE}1f, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", p: 2.2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.5,
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
            {item.icon}
          </Box>

          <Typography
            sx={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 900,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.35)",
              fontSize: 12,
            }}
          >
            {item.number}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 900,
            fontSize: 16.5,
            letterSpacing: "-0.01em",
            color: "#fff",
            mb: 1,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 12.8,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.70)",
          }}
        >
          {item.desc}
        </Typography>
      </Box>

      {/* bottom accent */}
      <Box
        sx={{
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${ORANGE} 40%, transparent 100%)`,
          opacity: 0.55,
        }}
      />
    </Box>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 16px)" },
        minWidth: { xs: "auto", sm: 260 },
        borderRadius: "18px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        overflow: "hidden",
        transition:
          "transform .25s ease, border-color .25s ease, background .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(255,255,255,0.22)",
          background: "rgba(255,255,255,0.06)",
        },
      }}
    >
      <Box sx={{ p: 2.2 }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 1.4,
            py: 0.7,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Inter',sans-serif",
            fontWeight: 900,
            fontSize: 11.5,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            mb: 1.6,
          }}
        >
          {phase.label}
        </Box>

        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 900,
            fontSize: 16.5,
            color: "#fff",
            mb: 1,
          }}
        >
          {phase.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 12.8,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.70)",
          }}
        >
          {phase.desc}
        </Typography>
      </Box>

      <Box
        sx={{
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.40) 50%, transparent 100%)`,
          opacity: 0.35,
        }}
      />
    </Box>
  );
}
