import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />

    <GlobalStyles
      styles={{
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          overflowX: "hidden",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      }}
    />

    {/* Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
