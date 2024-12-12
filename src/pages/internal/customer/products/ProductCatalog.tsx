// Pagina responsável por exibir o catálogo de produtos a venda.

import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon, Group as GroupIcon, LocalOffer } from "@mui/icons-material";
import { Img } from "react-image";
import configIcon from "../assets/config-orange-icon.png";

const CatalogoProdutos = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const products = [
    {
      title: "Large-16GB-8vcpu",
      specs: "vCPU 8 // Memória 16 GB // Disco 50 GB\nLink 50 Mbps // Transferência Ilimitada\nIPs públicos 1",
      price: "A partir de R$36,00/mês",
      buttonText: "ASSINAR AGORA",
      category: "Cloud",
    },
    {
      title: "Large-64GB-12vcpu",
      specs: "vCPU 12 // Memória 64 GB // Disco 50 GB\nLink 50 Mbps // Transferência Ilimitada\nIPs públicos 1",
      price: "A partir de R$3.000,00/mês",
      buttonText: "ASSINAR AGORA",
      category: "Infra",
    },
    {
      title: "Large-32GB-8vcpu",
      specs: "vCPU 8 // Memória 32 GB // Disco 50 GB\nLink 50 Mbps // Transferência Ilimitada\nIPs públicos 1",
      price: "A partir de R$1.800,00/mês",
      buttonText: "ASSINAR AGORA",
      category: "Serviço",
    },
    {
      title: "Medium-16GB-4vcpu",
      specs: "vCPU 4 // Memória 16 GB // Disco 50 GB\nLink 10 Mbps // Transferência Ilimitada\nIPs públicos 1",
      price: "A partir de R$500,00/mês",
      buttonText: "ASSINAR AGORA",
      category: "Cloud",
    },
  ];

  // Filtrar produtos com base no filtro ativo
  const filteredProducts =
    activeFilter === "Todos"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Header e título da página */}
      <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        <LocalOffer sx={{ fontSize: 30, marginRight: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Catálogo de Produtos
        </Typography>
      </Box>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
        {["Todos", "Cloud", "Infra", "Serviço"].map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "contained" : "outlined"}
            color="primary"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </Box>

      {/* Área de conteúdo rolável */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", padding: 2 }}>
        <Grid container spacing={3}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ position: "relative" }}>
              <Paper
                elevation={0}
                sx={{
                  padding: 2,
                  borderRadius: "5px",
                  pandding: "16px 16px 16px 30px",
                  overflow: "hidden",
                  backgroundColor: "#f1f1f1",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                }}
              >
                {/* Barra Lateral Laranja */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 10,
                    height: "100%",
                    backgroundColor: "#ff6b35",
                    borderRadius: "5px 0 0 5px",
                  }}
                />
                {/* Conteúdo do Card */}
                <Box sx={{  alignItems: "center", mb: 2, marginRight: 1, marginLeft: 2, }}>
                    
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  <Img src={configIcon}
                      loader={
                        <Typography variant="h6" gutterBottom>
                          Loading...
                        </Typography>
                      }
                      unloader={
                        <Typography variant="h6" gutterBottom>
                          Failed to load.
                        </Typography>
                      }
                      style={{
                    }} />  {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: "pre-line", marginBottom: 1 }}>
                    {product.specs}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff6b35",
                      color: "white",
                      textTransform: "none",
                      fontSize: "0.875rem",
                      padding: "6px 16px",
                      "&:hover": { backgroundColor: "#e65a2a" },
                    }}
                  >
                    {product.buttonText}
                  </Button>
                </Box>
              </Paper>
            </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CatalogoProdutos;
