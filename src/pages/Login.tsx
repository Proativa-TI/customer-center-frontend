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
    <Box sx={{ width: "100%",  textAlign: "center", justifyContent: "center" , display: "flex" }}>
      <Box sx={{ width: 400, textAlign: "center" }}>
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
            style={{ width: "300px", marginBottom: "50px", textAlign: "center", justifyContent: "center" }}
        />
        <Box sx={{ width: 450, textAlign: "center", display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
        </Box>
        
        <Box sx={{ width: 400, textAlign: "center", backgroundColor: "#F1F1F1", padding: 3, borderRadius: 2, marginBottom: 15,}}>
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
          sx={{ marginBottom: 2, width: 150, backgroundColor: "#F26130", padding: 1, }}
        >
          Acessar
        </Button>
        <Typography variant="body2" gutterBottom>
          Não possui conta? <Link href="#">Cadastre-se</Link>
        </Typography>
        <Box sx={{ width: 400, textAlign: "center", display: "flex", justifyContent: "center" }}>
            <Divider sx={{ marginY: 2, itemAlign: "center", width: 200 }} />
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
      <Box
        sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "60px", 
            backgroundColor: "#ffffff",
            display: "flex-container",
            alignItems: "center",
            justifyContent: "space-beteween",
            marginBottom: 5,
        }}>
        <Img
            src={redeSocial} 
            loader={<Typography variant="h6" gutterBottom>Loading...</Typography>}
            unloader={<Typography variant="h6" gutterBottom>Failed to load.</Typography>
            }
            style={{ width: "auto", height: '20px', textAlign: "left", justifyContent: "left", }}
        />
        <Box sx={{ textAlign: "right", justifyContent: "right",}}>
            <Img
                src={loginCerts} 
                loader={<Typography variant="h6" gutterBottom>Loading...</Typography>}
                unloader={<Typography variant="h6" gutterBottom>Failed to load.</Typography>
                }
                style={{ width: "auto", height: '100px', textAlign: "right", justifyContent: "right" }}
            />
        </Box>
    </Box>
    </Container>
  );
};

export default Login;
