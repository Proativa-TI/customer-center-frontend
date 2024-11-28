import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Dashboard = () => {
  const cardData = [
    { title: "Cloud", content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memoria RAM" },
    { title: "Faturas", content: "Total: R$ 1500\nÚltimo pagamento: 10/11/2024" },
    { title: "Chamados", content: "Chamados abertos: 2\nChamados resolvidos: 5" },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 2 }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                  {card.content}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
