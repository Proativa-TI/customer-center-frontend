// Página responsável por visualizar uma lista de faturas, com atalho para gerenciar, cancelar, emitir e deletar. Possivel ver todas as faturas emitidas.

import React, { useState } from "react";
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const ViewInvoices = () => {
  const [invoices] = useState([
    { id: "INV001", amount: "R$500,00", status: "Paga" },
    { id: "INV002", amount: "R$750,00", status: "Pendente" },
    { id: "INV003", amount: "R$300,00", status: "Cancelada" },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Visualizar Faturas
      </Typography>
      <Paper sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ViewInvoices;