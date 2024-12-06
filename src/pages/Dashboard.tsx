import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import homeIcon from "../assets/dash-home-icon.png";
import configIcon from "../assets/config-orange-icon.png";
import { Img } from "react-image";

const Dashboard = () => {
  const cardData = [
    {
      title: "Cloud",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
    {
      title: "Faturas",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
    {
      title: "Chamados",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
    {
      title: "Infra",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
    {
      title: "News",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
    {
      title: "Atendimentos",
      content: "Servidores ativos: 3\nRecursos utilizados:\n\n4 vCPUs\n500gb Armazenamento\n16gb memória RAM",
    },
  ];

  return (
    <Box sx={{ padding: 1 }}>
      
      <Typography variant="h5" gutterBottom>
      <Img
            src={homeIcon}
            loader={
              <Typography variant="h6" gutterBottom>
                Loading...
              </Typography>
            }
            unloader={
              <Typography variant="h6" gutterBottom>
                Failed to load.
              </Typography>
            }
            style={{
              height: "25px",
              marginRight: 3,
            }}
          /> Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: "relative" }}>
              <Paper
                elevation={0} 
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  padding: "16px 16px 16px 30px", 
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Barra Lateral Laranja */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 10,
                    height: "100%",
                    backgroundColor: "#ff6b35",
                    borderRadius: "5px 0 0 5px",
                  }}
                />
                {/* Conteúdo do Card */}
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2, marginRight: 1 }}>
                    <Img src={configIcon}
                      loader={
                        <Typography variant="h6" gutterBottom>
                          Loading...
                        </Typography>
                      }
                      unloader={
                        <Typography variant="h6" gutterBottom>
                          Failed to load.
                        </Typography>
                      }
                      style={{
                      }} />
                    {/* <SettingsIcon sx={{ color: "#ff6b35", fontSize: 34, marginRight: 1 }} /> */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Barlow-SemiBold', Helvetica",
                        fontWeight: "bold",
                        color: "#303030",
                        marginLeft: 1,
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-line",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#303030",
                    }}
                  >
                    {card.content}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
