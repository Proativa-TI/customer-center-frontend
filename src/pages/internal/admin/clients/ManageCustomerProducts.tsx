// Página para manuseio de produtos contratados por um determinado cliente. Responsável por editar um produto contratado.

import React, { useState } from "react";
import { Box, Typography, Paper, Button, TextField, MenuItem } from "@mui/material";

const ManageCustomerProducts = () => {
  const [product, setProduct] = useState({
    name: "VM WMSus",
    status: "Ativo",
    type: "Cloud",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciar Produtos do Cliente
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <TextField
          label="Produto"
          name="name"
          fullWidth
          margin="normal"
          value={product.name}
          onChange={handleChange}
        />
        <TextField
          label="Status"
          name="status"
          fullWidth
          margin="normal"
          select
          value={product.status}
          onChange={handleChange}
        >
          <MenuItem value="Ativo">Ativo</MenuItem>
          <MenuItem value="Inativo">Inativo</MenuItem>
        </TextField>
        <TextField
          label="Tipo"
          name="type"
          fullWidth
          margin="normal"
          select
          value={product.type}
          onChange={handleChange}
        >
          <MenuItem value="Cloud">Cloud</MenuItem>
          <MenuItem value="Infra">Infra</MenuItem>
        </TextField>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Atualizar Produto
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageCustomerProducts;
