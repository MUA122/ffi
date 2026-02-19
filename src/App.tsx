import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import FFIHeader from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import OurPartnersMarquee from "./components/OurPartnersMarquee";
import FFIFooter from "./components/Footer";
import CompanySection from "./components/Company";
import ServicesPage from "./components/Service";
import ProjectsPage from "./components/Project";
import VendorsPage from "./components/Vendor";
import ContactSection from "./components/Contact";

export default function App() {
  const partners = [
    { src: "/assets/par1.png", alt: "Partner 1" },
    { src: "/assets/par2.png", alt: "Partner 2" },
    { src: "/assets/par3.png", alt: "Partner 3" },
    { src: "/assets/par4.png", alt: "Partner 4" },
    { src: "/assets/par5.png", alt: "Partner 5" },
    { src: "/assets/par6.png", alt: "Partner 6" },
    { src: "/assets/par7.png", alt: "Partner 7" },
    { src: "/assets/par8.png", alt: "Partner 8" },
    { src: "/assets/par9.png", alt: "Partner 9" },
  ];

  return (
    <Box sx={{ background: "#000", minHeight: "100vh" }}>
      <FFIHeader />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroVideo
                src="/assets/hero.mp4"
                poster="/assets/hero-poster.jpg"
                sx={{
                  mt: { xs: "-88px", sm: "-96px", md: "-108px" },
                }}
              />
              <OurPartnersMarquee partners={partners} speedSeconds={15} />
              <CompanySection />
            </>
          }
        />

        {/*  PAGES */}
        <Route path="/company" element={<CompanySection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      <FFIFooter />
    </Box>
  );
}
