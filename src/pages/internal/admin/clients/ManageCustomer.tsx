// Página para manuseio de informações de um cliente, para edição, adição de notas e demais detalhes.

import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const ManageCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "(11) 99999-9999",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciar Cliente
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <TextField
          label="Nome do Cliente"
          name="name"
          fullWidth
          margin="normal"
          value={customer.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={customer.email}
          onChange={handleChange}
        />
        <TextField
          label="Telefone"
          name="phone"
          fullWidth
          margin="normal"
          value={customer.phone}
          onChange={handleChange}
        />
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Salvar Alterações
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageCustomer;
