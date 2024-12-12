import GoogleIcon from "@mui/icons-material/Google";
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
import { JSX } from "react/jsx-runtime";
import logo from '../assets/logo.png';
import redeSocial from '../assets/redesocial-adentro.png';
import loginCerts from '../assets/login-certs.png';
import { Img } from "react-image";


const Login = (): JSX.Element => {
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
    <Box sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}>
      <Box sx={{ width: { xs: "100%", sm: 400 }, textAlign: "center", marginBottom: 20,}}>
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
              maxWidth: "350px",
              marginBottom: "45px",
              textAlign: "center",
            }}
          />
        <Box sx={{ width: "100%", textAlign: "center", }}>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
        </Box>
        
        <Box
            sx={{
              width: { xs: "100%", sm: 400 },
              textAlign: "center",
              backgroundColor: "#F1F1F1",
              padding: { xs: 2, sm: 3 },
              borderRadius: 2,
            }}
          >
        <TextField
          fullWidth
          label="Email ou Usuário"
          margin="normal"
          variant="outlined"
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
          sx={{
            backgroundColor: "#FFFFFF",
            width: 300,
          }}
        />
        <Link
          href="#"
          variant="body2"
          sx={{ display: "block", textAlign: "center", marginBottom: 2 }}
        >
          Esqueceu sua senha?
        </Link>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginBottom: 1, width: { xs: "100%", sm: 150 }, backgroundColor: "#F26130", padding: 1, }}
        >
          Acessar
        </Button>
        <Typography variant="body2" gutterBottom>
              Não possui conta?{" "}
              <Link
                component={RouterLink}
                to="/cadastro"
                sx={{ cursor: "pointer" }}
              >
                Cadastre-se
              </Link>
        </Typography>
        <Box sx={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
            <Divider sx={{ marginY: 2, itemAlign: "center", width: 150, }} />
        </Box>
        <Typography variant="body2" gutterBottom>
          Ou acesse com:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Google
            </Button>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
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
          sx={{ textAlign: "right", justifyContent: "right",  }}
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

export default Login;
