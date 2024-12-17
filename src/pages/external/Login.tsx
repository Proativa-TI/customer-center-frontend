import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// import { login } from "../../api/Auth"; // API de login
// import { getUserRole } from "../../../utils/auth-utils"; // Função para extrair role do token JWT
import logo from "../../assets/general-icons/logo.png";
import redeSocial from "../../assets/general-icons/redesocial-adentro.png";
import loginCerts from "../../assets/general-icons/login-certs.png";
import { Img } from "react-image";

const Login = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  /* const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await login(username, password); // Faz login e salva o token no localStorage
      const role = getUserRole(); // Extrai a role do token JWT
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "customer") {
        navigate("/customer/dashboard");
      } else {
        setError("Acesso negado!");
      }
    } catch (err) {
      setError("Usuário ou senha inválidos!");
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <Container
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
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 400 },
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {/* Logo */}
          <Img
            src={logo}
            loader={<Typography>Loading...</Typography>}
            unloader={<Typography>Failed to load.</Typography>}
            style={{
              width: "80%",
              maxWidth: "350px",
              marginBottom: "45px",
            }}
          />

          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          {/* Formulário */}
          <Box
            sx={{
              backgroundColor: "#F1F1F1",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <TextField
              fullWidth
              label="Email ou Usuário"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                backgroundColor: "#FFFFFF",
                width: 300,
              }}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: "#FFFFFF",
                width: 300,
              }}
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Link href="#" variant="body2" sx={{ display: "block", marginBottom: 2 }}>
              Esqueceu sua senha?
            </Link>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              // onClick={handleLogin}
              sx={{ marginBottom: 1, width: { xs: "100%", sm: 150 }, backgroundColor: "#F26130", padding: 1, }}
            >
              {loading ? "Carregando..." : "Acessar"}
            </Button>
            <Typography variant="body2">
              Não possui conta?{" "}
              <Link component={RouterLink} to="/cadastro">
                Cadastre-se
              </Link>
            </Typography>

            <Box sx={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
              <Divider sx={{ marginY: 2, itemAlign: "center", width: 200, }} />
            </Box>
            <Typography variant="body2">Ou acesse com:</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="outlined" startIcon={<GoogleIcon />}>
                  Google
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Img src={redeSocial} style={{ width: "auto", height: "19px" }} />
        <Img src={loginCerts} style={{ width: "auto", height: "70px" }} />
      </Box>
    </Container>
  );
};

export default Login;
