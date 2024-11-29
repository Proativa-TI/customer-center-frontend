import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { Person as PersonIcon, ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

// Importando o ícone personalizado para a barra de pesquisa
import headerSearchIcon from "../assets/header-search-icon.png";

const Header = ({ expanded }: { expanded: boolean }) => {
  return (
    <AppBar
      position="relative"
      sx={{
        width: expanded ? "100%" : "100%",
        bgcolor: "#f1f1f1",
        transition: "width 0.3s, margin-left 0.3s", // Suaviza o ajuste
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "62px", // Altura fixa para alinhar ao menu lateral
        }}
      >
        {/* Barra de pesquisa */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            flexGrow: 1,
            maxWidth: "360px",
          }}
        >
          <img
            src={headerSearchIcon}
            alt="Ícone de Pesquisa"
            style={{ height: 24, width: 24 }}
          />
          <input
            type="text"
            placeholder="Pesquisar..."
            style={{
              border: "none",
              outline: "none",
              marginLeft: "8px",
              flex: 1,
              fontFamily: "inherit",
            }}
          />
        </Box>

        {/* Ícones na direita */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "#333",
            }}
          >
            Company Name
          </Typography>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
