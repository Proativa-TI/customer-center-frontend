import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Img } from "react-image";
import logo from "../../assets/general-icons/logo.png";
import redeSocial from "../../assets/general-icons/redesocial-adentro.png";
import loginCerts from "../../assets/general-icons/login-certs.png";
import { JSX } from "react/jsx-runtime";

const Cadastro = (): JSX.Element => {
  return (
    <Container
      id="cadastro-container"
      className="cadastro-container"
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        id="cadastro-box"
        className="cadastro-box"
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          id="cadastro-form-box"
          className="cadastro-form-box"
          sx={{
            width: { xs: "100%", sm: 400, },
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {/* Logo */}
          <Img
            src={logo}
            loader={
              <Typography variant="h5" gutterBottom>
                Loading...
              </Typography>
            }
            unloader={
              <Typography variant="h5" gutterBottom>
                Failed to load.
              </Typography>
            }
            style={{
              width: "80%",
              maxWidth: "300px",
              marginBottom: "45px",
              textAlign: "center",
            }}
          />

          {/* Título */}
          <Box
            id="cadastro-title-box"
            className="cadastro-title-box"
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Formulário de Cadastro
            </Typography>
          </Box>

          {/* Formulário */}
          <Box
            id="cadastro-form"
            className="cadastro-form"
            sx={{
              width: { xs: "100%", sm: 400 },
              textAlign: "center",
              backgroundColor: "#F1F1F1",
              padding: { xs: 2, sm: 3 },
              borderRadius: 2,
            }}
          >
            <TextField
              id="cadastro-nome"
              className="cadastro-nome"
              fullWidth
              label="Nome Completo"
              margin="normal"
              variant="outlined"
              sx={{
                backgroundColor: "#FFFFFF",
                width: 300,
              }}
              aria-label="Nome Completo"
            />
            <TextField
              id="cadastro-email"
              className="cadastro-email"
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              sx={{
                backgroundColor: "#FFFFFF",
                width: 300,
              }}
              aria-label="Email"
            />
            <TextField
              id="cadastro-telefone"
              className="cadastro-telefone"
              fullWidth
              label="Telefone"
              type="tel"
              margin="normal"
              variant="outlined"
              sx={{
                backgroundColor: "#FFFFFF",
                width: 300,
              }}
              aria-label="Telefone"
            />

            {/* Checkboxes */}
            <Box
              id="cadastro-checkbox-group"
              className="cadastro-checkbox-group"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormGroup sx={{ marginY: 1 }}>
                <FormControlLabel
                  id="checkbox-privacidade"
                  className="checkbox-privacidade"
                  control={<Checkbox required />}
                  label={
                    <Typography variant="body2" component="span">
                      <Link href="#">Política de Privacidade.</Link>
                    </Typography>
                  }
                />
                <FormControlLabel
                  id="checkbox-termos"
                  className="checkbox-termos"
                  control={<Checkbox required />}
                  label={
                    <Typography variant="body2" component="span">
                      <Link href="#">Termos de Aceite</Link>.
                    </Typography>
                  }
                />
              </FormGroup>
            </Box>

            {/* Botão */}
            <Button
              id="cadastro-enviar"
              className="cadastro-enviar"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginBottom: 1,
                width: { xs: "100%", sm: 150 },
                backgroundColor: "#F26130",
                padding: 1,
              }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        id="cadastro-footer"
        className="cadastro-footer"
        sx={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          width: "100%",
          height: { xs: "10px", sm: "15px" },
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Img
            id="cadastro-rede-social"
            className="cadastro-rede-social"
            src={redeSocial}
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
            style={{ width: "auto", height: "19px" }}
            />
        <Box
          id="cadastro-login-certs"
          className="cadastro-login-certs"
          sx={{ textAlign: "right", justifyContent: "right", }}
        >
          <Img
            src={loginCerts}
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
            style={{ width: "auto", height: "70px" }}
        />
        </Box>
      </Box>
    </Container>
  );
};

export default Cadastro;
