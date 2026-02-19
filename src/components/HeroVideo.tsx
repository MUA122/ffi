import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ORANGE = "#E8651A";

type Props = {
  src: string;
  poster?: string;
  minHeightVh?: number;
  showContent?: boolean;
  sx?: Record<string, unknown>;
};

const HeroVideo: React.FC<Props> = ({
  src,
  poster,
  minHeightVh = 100,
  showContent = true,
  sx,
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: `${minHeightVh}vh`, md: `${minHeightVh}vh` },
        overflow: "hidden",
        background: "#000",
        ...sx,
      }}
    >
      {/* Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src={src} type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      {showContent && (
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: "6%", md: "8%", lg: "10%", xl: "12%" },
            pt: { xs: "120px", md: "160px" },
            pb: { xs: "60px", md: "100px" },
            display: "flex",
            alignItems: "flex-end",
            minHeight: "inherit",
          }}
        >
          <Box sx={{ maxWidth: 800 }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: 34, md: 58 },
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Build With Confidence
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.8)",
                fontSize: { xs: 14, md: 16 },
                maxWidth: 600,
              }}
            >
              Premium construction solutions built to last.
            </Typography>

            <Button
              href="contact"
              variant="contained"
              sx={{
                mt: 3,
                background: `linear-gradient(135deg, ${ORANGE}, #bf5410)`,
                px: 3,
                py: 1.2,
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "10px",
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeroVideo;
