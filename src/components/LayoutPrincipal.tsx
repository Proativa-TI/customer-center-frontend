import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuLateral from "./MenuLateral";
import { Menu as MenuIcon } from "@mui/icons-material";

const LayoutPrincipal = ({ children }: { children: React.ReactNode }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Menu lateral */}
      <MenuLateral expanded={menuExpanded} />

      {/* Conteúdo principal */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <IconButton onClick={() => setMenuExpanded((prev) => !prev)}>
          <MenuIcon />
        </IconButton>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutPrincipal;
