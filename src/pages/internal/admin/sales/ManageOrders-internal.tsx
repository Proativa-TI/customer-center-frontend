// Página responsável para edição de pedidos realizados, seja aceite, recusa, alteração de status, etc. Por usuário interno (admin).
import React, { useState } from "react";
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const ManageOrdersInternal = () => {
  const [orders] = useState([
    { id: "ORD001", customer: "John Doe", status: "Pendente" },
    { id: "ORD002", customer: "Jane Smith", status: "Aceito" },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciar Pedidos
      </Typography>
      <Paper sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small">
                    Editar
                  </Button>
                  <Button variant="contained" color="success" size="small" sx={{ ml: 1 }}>
                    Aceitar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ManageOrdersInternal;