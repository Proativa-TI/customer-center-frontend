// Página responsável para visualização de todos os pedidos realizados. Utilizada por usuários internos. (lista de pedidos e possibilidade de aceite e edição)

import React, { useState } from "react";
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const ViewOrdersInternal = () => {
  const [orders] = useState([
    { id: "ORD001", customer: "John Doe", status: "Pendente" },
    { id: "ORD002", customer: "Jane Smith", status: "Aceito" },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Visualizar Pedidos
      </Typography>
      <Paper sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ViewOrdersInternal;