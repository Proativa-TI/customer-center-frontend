import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, MenuItem } from "@mui/material";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "VM WMSus", category: "Cloud" },
    { id: 2, name: "Firewall", category: "Infraestrutura" },
  ]);

  const handleChange = (index: number, key: string, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [key]: value };
    setProducts(updatedProducts);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciar Produtos
      </Typography>
      {products.map((product, index) => (
        <Paper sx={{ padding: 3, borderRadius: 2, mb: 2 }} key={product.id}>
          <TextField
            label="Nome do Produto"
            fullWidth
            margin="normal"
            value={product.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <TextField
            label="Categoria"
            fullWidth
            margin="normal"
            select
            value={product.category}
            onChange={(e) => handleChange(index, "category", e.target.value)}
          >
            <MenuItem value="Cloud">Cloud</MenuItem>
            <MenuItem value="Infraestrutura">Infraestrutura</MenuItem>
          </TextField>
        </Paper>
      ))}
      <Button variant="contained" color="primary">
        Adicionar Novo Produto
      </Button>
    </Box>
  );
};

export default ManageProducts;