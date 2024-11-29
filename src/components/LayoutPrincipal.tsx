import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuLateral from "./MenuLateral";
import Header from "./header";
import { Menu as MenuIcon } from "@mui/icons-material";

const LayoutPrincipal = ({ children }: { children: React.ReactNode }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Menu lateral */}
      <MenuLateral expanded={menuExpanded} />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header expanded={menuExpanded} />
        {/* Conteúdo principal */}
        <Box sx={{ flexGrow: 1, p: 1.5 }}>
          <IconButton onClick={() => setMenuExpanded((prev) => !prev)}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutPrincipal;
