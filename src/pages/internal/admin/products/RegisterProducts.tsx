import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, MenuItem } from "@mui/material";

const RegisterProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Registrar Novo Produto
      </Typography>
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <TextField
          label="Nome do Produto"
          name="name"
          fullWidth
          margin="normal"
          value={product.name}
          onChange={handleChange}
        />
        <TextField
          label="Categoria"
          name="category"
          fullWidth
          margin="normal"
          select
          value={product.category}
          onChange={handleChange}
        >
          <MenuItem value="Cloud">Cloud</MenuItem>
          <MenuItem value="Infraestrutura">Infraestrutura</MenuItem>
        </TextField>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Registrar Produto
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterProducts;