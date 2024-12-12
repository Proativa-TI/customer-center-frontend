// Página responsável por exibir os produtos contratados por um determinado cliente, exibindo os produtos contratados para aquele cliente específico.

import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const produtos = [
  {
    id: "#12345",
    status: "ATIVO",
    categoria: "Colocation",
    produto: "VM WMSus",
    proximoVencimento: "30/02/24",
    preco: "R$500,00",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    dataContratacao: "30/02/24",
    cicloPagamento: "00",
    contrato: "123456789",
    tipo: "Cloud",
  },
  {
    id: "#12346",
    status: "DENIED",
    categoria: "Colocation",
    produto: "VM WMSus",
    proximoVencimento: "30/02/24",
    preco: "R$500,00",
    tipo: "Infra",
  },
  {
    id: "#12347",
    status: "CLOSED",
    categoria: "Colocation",
    produto: "VM WMSus",
    proximoVencimento: "30/02/24",
    preco: "R$500,00",
    tipo: "Serviço",
  },
];

const ProdutosContratados = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filtro, setFiltro] = useState("Todos");

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const produtosFiltrados =
    filtro === "Todos"
      ? produtos
      : produtos.filter((produto) => produto.tipo === filtro);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Produtos Contratados
      </Typography>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        {["Todos", "Cloud", "Infra", "Serviço"].map((tipo) => (
          <Button
            key={tipo}
            variant={filtro === tipo ? "contained" : "outlined"}
            onClick={() => setFiltro(tipo)}
          >
            {tipo}
          </Button>
        ))}
      </Box>

      {/* Cabeçalhos */}
      <Paper sx={{ display: "flex", padding: 1, backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>ID</Typography>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>STATUS</Typography>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>Categoria</Typography>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>Produto/Serviços</Typography>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>Próximo Vencimento</Typography>
        <Typography sx={{ flex: 1, fontWeight: 600 }}>Preço</Typography>
        <Typography sx={{ fontWeight: 600 }}>Gerenciar</Typography>
      </Paper>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {produtosFiltrados.map((produto, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "8px",
                backgroundColor: "white",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderLeft: `4px solid ${
                    produto.status === "ATIVO"
                      ? "green"
                      : produto.status === "DENIED"
                      ? "red"
                      : "blue"
                  }`,
                  paddingLeft: 2,
                }}
              >
                <Typography sx={{ flex: 1 }}>{produto.id}</Typography>
                <Typography sx={{ flex: 1 }}>{produto.status}</Typography>
                <Typography sx={{ flex: 1 }}>{produto.categoria}</Typography>
                <Typography sx={{ flex: 1 }}>{produto.produto}</Typography>
                <Typography sx={{ flex: 1 }}>{produto.proximoVencimento}</Typography>
                <Typography sx={{ flex: 1 }}>{produto.preco}</Typography>
                <IconButton onClick={() => handleExpand(index)}>
                  {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>

              {/* Conteúdo Expandido */}
              {expandedIndex === index && (
                <Box
                  sx={{
                    marginTop: 2,
                    padding: 2,
                    backgroundColor: "#eeeeee",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="body2">
                    <strong>Descrição:</strong> {produto.descricao}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>Data de contratação:</strong> {produto.dataContratacao}
                  </Typography>
                  {produto.cicloPagamento && (
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      <strong>Ciclo de pagamento:</strong>
                      <Select
                        value={produto.cicloPagamento}
                        size="small"
                        sx={{ marginLeft: 1 }}
                      >
                        <MenuItem value="00">Mensal</MenuItem>
                        <MenuItem value="01">Anual</MenuItem>
                      </Select>
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>N° de contrato:</strong> {produto.contrato}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProdutosContratados;
