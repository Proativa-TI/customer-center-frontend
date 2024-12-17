// Página para gerenciamento de uma fatura específica, onde é possível editá-la (para setores internos), adicionar informações e demais configurações (como emití-las, cancelar, etc).

import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, MenuItem } from "@mui/material";

const ManageInvoices = () => {
  const [invoice, setInvoice] = useState({
    id: "INV001",
    amount: "R$500,00",
    status: "Paga",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciar Fatura
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <TextField
          label="ID da Fatura"
          name="id"
          fullWidth
          margin="normal"
          value={invoice.id}
          onChange={handleChange}
        />
        <TextField
          label="Valor"
          name="amount"
          fullWidth
          margin="normal"
          value={invoice.amount}
          onChange={handleChange}
        />
        <TextField
          label="Status"
          name="status"
          select
          fullWidth
          margin="normal"
          value={invoice.status}
          onChange={handleChange}
        >
          <MenuItem value="Paga">Paga</MenuItem>
          <MenuItem value="Pendente">Pendente</MenuItem>
          <MenuItem value="Cancelada">Cancelada</MenuItem>
        </TextField>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Salvar Alterações
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageInvoices;