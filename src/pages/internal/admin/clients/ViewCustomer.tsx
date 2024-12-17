// Página com intuito de acesso interno, para que admin possa visualizar os detalhes do cliente, seja perfil, log, chamados e produtos deste cliente.

import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

const ViewCustomer = () => {
  const [customer] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "(11) 99999-9999",
    status: "Ativo",
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Detalhes do Cliente
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="body1"><strong>Nome:</strong> {customer.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {customer.email}</Typography>
        <Typography variant="body1"><strong>Telefone:</strong> {customer.phone}</Typography>
        <Typography variant="body1"><strong>Status:</strong> {customer.status}</Typography>
      </Paper>
    </Box>
  );
};

export default ViewCustomer;