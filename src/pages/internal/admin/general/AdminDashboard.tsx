// Página responsável por exibir detalhes gerais do sistema para um usuário interno, separado por setor.

import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const AdminDashboard = () => {
  const [sectors] = useState([
    { name: "Financeiro", description: "Gestão de pagamentos e receitas." },
    { name: "Atendimento", description: "Suporte ao cliente." },
    { name: "Infraestrutura", description: "Serviços em nuvem e rede." },
    { name: "Vendas", description: "Gestão de pedidos e faturas." },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard Administrativo
      </Typography>
      <Grid container spacing={2}>
        {sectors.map((sector, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography variant="h6">{sector.name}</Typography>
              <Typography variant="body2">{sector.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;