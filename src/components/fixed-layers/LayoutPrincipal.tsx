import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuLateral from "./SideMenu";
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
          <Header expanded={menuExpanded} setMenuExpanded={setMenuExpanded} />
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
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutPrincipal;
