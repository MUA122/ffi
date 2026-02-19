import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ORANGE = "#E8651A";

type ProjectDetail = {
  name: string;
  budget: string;
  duration: string;
  start: string;
  firstDelivery?: string;
  finalDelivery: string;
  scope: string;
  contract: string;
  location?: string;
};

type Category = {
  key: "construction" | "infrastructure" | "renovation";
  number: string;
  title: string;
  description: string;
  image: string;
  details: ProjectDetail[];
};

const categories: Category[] = [
  {
    key: "construction",
    number: "01.",
    title: "Construction",
    description:
      "FFI Contracting network of construction professionals rises to the challenges associated with a diverse buildings portfolio, bringing added value to every commercial, institutional, educational, and residential project...",
    image: "/assets/con_ai.png",
    details: [
      {
        name: "Nestle Salam Project",
        budget: "108,000,000 Saudi Riyals",
        duration: "13 months",
        start: "May 1, 2024",
        firstDelivery: "March 1, 2025",
        finalDelivery: "June 1, 2025",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
      {
        name: "Zahra Mall",
        budget: "15,000,000 Saudi Riyals",
        duration: "8 months",
        start: "June 5, 2022",
        finalDelivery: "January 9, 2023",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
      {
        name: "King Fahd Hospital",
        budget: "18,000,000 Saudi Riyals",
        duration: "12 months",
        start: "January 1, 2019",
        finalDelivery: "December 30, 2020",
        scope: "Renovation, Architecture, Mechanical, and Electrical",
        contract: "Collection Pool",
      },
      {
        name: "Al-Rabia Residential",
        budget: "49,510,575 Saudi Riyals",
        duration: "13 months",
        start: "November 22, 2021",
        firstDelivery: "November 21, 2022",
        finalDelivery: "December 18, 2022",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
      {
        name: "Mobily",
        budget: "40,000,000 Saudi Riyals",
        duration: "10 months",
        start: "December 22, 2022",
        finalDelivery: "June 1, 2025",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
    ],
  },
  {
    key: "infrastructure",
    number: "02.",
    title: "Infrastructure",
    description:
      "The urbanization and progress of countries are measured by their interest in infrastructure, where they are the backbone and the main factor upon which major investment and projects contribute to the development of society and provide a healthy and safe environment for the individual and society.",
    image: "/assets/inf_ai.png", // حط صورتك هنا
    details: [
      {
        name: "Al-Naeem Gas Pipeline",
        location: "Hawtah, Bani Tamim",
        budget: "70,000,000 Saudi Riyals",
        duration: "9 months",
        start: "October 15, 2019",
        finalDelivery: "November 20, 2020",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
    ],
  },
  {
    key: "renovation",
    number: "03.",
    title: "Renovation",
    description:
      "Support for facilities management provides integrated solutions for maintenance and operational contracts; however, it is not limited to maintenance, cleaning and hospitality services only it also provides services that far exceed with modern and advanced operational solutions and ideas according to international quality standards in the field of operation and maintenance.",
    image: "/assets/rev_ai.png", // حط صورتك هنا
    details: [
      {
        name: "Al Manhal Water Factory",
        location: "Riyadh – Second Industrial City",
        budget: "18,000,000 Saudi Riyals",
        duration: "7 months",
        start: "August 1, 2024",
        finalDelivery: "February 15, 2025",
        scope:
          "Concrete Structure, Architectural Works, Mechanical Works, and Electrical Works",
        contract: "Turnkey",
      },
    ],
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<Category | null>(null);

  const onOpen = (cat: Category) => {
    setActive(cat);
    setOpen(true);
  };

  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh" }}>
      {/*  Banner */}
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
            backgroundImage: "url(/assets/project_ai.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlays */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.50) 48%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(800px 500px at 20% 35%, rgba(232,101,26,0.22) 0%, rgba(0,0,0,0) 60%)",
              pointerEvents: "none",
            }}
          />

          <Stack
            sx={{
              position: "relative",
              height: "100%",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 6 },
              justifyContent: "center",
              maxWidth: { md: 900 },
            }}
            spacing={2.2}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontSize: { xs: 42, md: 64 },
                lineHeight: 1,
              }}
            >
              Projects
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                maxWidth: 720,
              }}
            >
              As a professional technical company, we offer a complete range of
              services to help our clients maintain a competitive edge in their
              respective projects. We customize our services to meet the
              business and project goals of our clients — delivering the best
              and most economical project or solution.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {[
                "Construction",
                "Infrastructure",
                "Renovation",
                "Turnkey Delivery",
              ].map((t) => (
                <Chip
                  key={t}
                  label={t}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    height: 34,
                    borderRadius: 999,
                    "& .MuiChip-label": { px: 1.6, fontSize: 11 },
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: ORANGE,
                  color: "#fff",
                  borderRadius: "12px",
                  px: 2.2,
                  py: 1.25,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  boxShadow: `0 18px 40px rgba(232,101,26,0.30)`,
                  "&:hover": { bgcolor: "#f07520" },
                }}
                onClick={() => {
                  const el = document.getElementById("projects-list");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.22)",
                  color: "#fff",
                  borderRadius: "12px",
                  px: 2.2,
                  py: 1.25,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  bgcolor: "rgba(0,0,0,0.18)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.38)",
                    bgcolor: "rgba(255,255,255,0.06)",
                  },
                }}
                onClick={() => window.location.assign("contact")}
              >
                Get in Touch
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Projects List */}
      <Box
        id="projects-list"
        sx={{
          px: { xs: "4%", md: "6%", lg: "8%" },
          pb: { xs: 7, md: 10 },
        }}
      >
        <Stack spacing={{ xs: 3.5, md: 4.5 }}>
          {categories.map((cat, idx) => (
            <ProjectRow
              key={cat.key}
              category={cat}
              flip={idx % 2 === 1}
              onMore={() => onOpen(cat)}
            />
          ))}
        </Stack>
      </Box>

      {/* Details Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: { xs: "18px", md: "22px" },
            overflow: "hidden",
            bgcolor: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(22px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.75)",
          },
        }}
      >
        <Box
          sx={{
            px: { xs: 2.25, md: 3 },
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(90deg, rgba(232,101,26,0.18) 0%, rgba(0,0,0,0) 70%)",
          }}
        >
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>
              {active?.title} — Details
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
              Project budgets, timelines, scope, and contract type.
            </Typography>
          </Box>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "12px",
              "&:hover": {
                color: "#fff",
                borderColor: "rgba(255,255,255,0.3)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ px: { xs: 2.25, md: 3 }, py: 2.5 }}>
          <Stack spacing={2.25}>
            {active?.details?.map((d, i) => (
              <Box
                key={`${d.name}-${i}`}
                sx={{
                  borderRadius: "18px",
                  p: { xs: 2, md: 2.25 },
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 55px rgba(0,0,0,0.35)",
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={1.25}
                  sx={{
                    alignItems: { md: "center" },
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontWeight: 900, fontSize: 15 }}
                  >
                    {d.name}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                      label={d.contract}
                      sx={{
                        height: 30,
                        borderRadius: 999,
                        bgcolor: `${ORANGE}22`,
                        color: "#fff",
                        border: `1px solid ${ORANGE}45`,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        "& .MuiChip-label": { fontSize: 11, px: 1.2 },
                      }}
                    />
                    <Chip
                      label={d.duration}
                      sx={{
                        height: 30,
                        borderRadius: 999,
                        bgcolor: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontWeight: 800,
                        "& .MuiChip-label": { fontSize: 11, px: 1.2 },
                      }}
                    />
                  </Stack>
                </Stack>

                <Divider
                  sx={{ my: 1.6, borderColor: "rgba(255,255,255,0.08)" }}
                />

                <Stack spacing={1}>
                  {d.location && (
                    <InfoRow label="Location" value={d.location} />
                  )}
                  <InfoRow label="Budget" value={d.budget} />
                  <InfoRow label="Project Start" value={d.start} />
                  {d.firstDelivery && (
                    <InfoRow label="First Delivery" value={d.firstDelivery} />
                  )}
                  <InfoRow
                    label="Final Delivery / Completion"
                    value={d.finalDelivery}
                  />
                  <InfoRow label="Scope of Work" value={d.scope} />
                </Stack>
              </Box>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

function ProjectRow({
  category,
  flip,
  onMore,
}: {
  category: Category;
  flip?: boolean;
  onMore: () => void;
}) {
  return (
    <Box
      sx={{
        borderRadius: { xs: "18px", md: "22px" },
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow: "0 26px 80px rgba(0,0,0,0.55)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: flip ? "row-reverse" : "row" }}
        sx={{ minHeight: { md: 360 } }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: "1 1 52%",
            minHeight: { xs: 220, md: 360 },
            position: "relative",
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.00) 55%, rgba(0,0,0,0.45) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.50) 100%)",
            }}
          />
        </Box>

        {/* Content */}
        <Stack
          spacing={1.6}
          sx={{
            flex: "1 1 48%",
            p: { xs: 2.25, md: 3.25 },
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.50)", fontWeight: 800 }}>
            {category.number}
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 950,
              fontSize: { xs: 26, md: 32 },
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {category.title}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.85,
              fontSize: { xs: 13.5, md: 14.5 },
              maxWidth: 560,
            }}
          >
            {category.description}
          </Typography>

          <Box sx={{ pt: 0.5 }}>
            <Button
              variant="text"
              onClick={onMore}
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                px: 0,
                "&:hover": { color: "#fff", background: "transparent" },
              }}
              endIcon={
                <ArrowForwardIcon sx={{ color: ORANGE, fontSize: 18 }} />
              }
            >
              More Details
            </Button>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${ORANGE}AA, transparent)`,
              opacity: 0.75,
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={0.6}
      sx={{
        alignItems: { sm: "baseline" },
        justifyContent: "space-between",
        gap: 1.5,
      }}
    >
      <Typography
        sx={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 12,
          fontWeight: 900,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          minWidth: { sm: 180 },
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.88)",
          fontSize: 13.5,
          lineHeight: 1.6,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
