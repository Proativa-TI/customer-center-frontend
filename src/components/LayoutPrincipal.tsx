import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuLateral from "./MenuLateral";
import Header from "./header";
import { Menu as MenuIcon } from "@mui/icons-material";

const LayoutPrincipal = ({ children }: { children: React.ReactNode }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Menu lateral fixo */}
      <MenuLateral expanded={menuExpanded} />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header fixo */}
        <Box sx={{ position: "sticky", top: 0, zIndex: 2 }}>
          <Header expanded={menuExpanded} />
        </Box>

        {/* Conteúdo principal rolável */}
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
            padding: 2,
            backgroundColor: "#f8f9fa", // Fundo opcional para destacar o conteúdo
          }}
        >
          <IconButton onClick={() => setMenuExpanded((prev) => !prev)} sx={{ mb: 2 }}>
            <MenuIcon />
          </IconButton>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutPrincipal;
