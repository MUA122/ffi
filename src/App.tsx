import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import FFIHeader from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import OurPartnersMarquee from "./components/OurPartnersMarquee";
import FFIFooter from "./components/Footer";
import CompanySection from "./components/Company";
import ServicesPage from "./components/Service";

export default function App() {
  const partners = [
    { src: "/assets/par1.png", alt: "Partner 1" },
    { src: "/assets/par2.png", alt: "Partner 2" },
    { src: "/assets/par3.png", alt: "Partner 3" },
    { src: "/assets/par4.png", alt: "Partner 4" },
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
              <OurPartnersMarquee partners={partners} speedSeconds={10} />
              <CompanySection />
            </>
          }
        />

        {/*  PAGES */}
        <Route path="/company" element={<CompanySection />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <FFIFooter />
    </Box>
  );
}
