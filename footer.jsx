import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:"rgb(0,0,0,1)",
        color: "#fff",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand / About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
       Py-Lit
            </Typography>
            <Typography variant="body2" color="grey.400">
              Turn machine learning intent into reproducible experiments.
              Focus on research, not boilerplate.
            </Typography>
          </Grid>

          {/* Product */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <Box>
              <Link href="#" underline="none" color="grey.400" display="block" sx={{ mb: 1 }}>
                How it works
              </Link>
              <Link href="#" underline="none" color="grey.400" display="block" sx={{ mb: 1 }}>
                Features
              </Link>
              
            </Box>
          </Grid>

 
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Lets Connect !
            </Typography>
                <Typography color="grey.400" gutterBottom>
                 K Gowtham Vithal Sai 
            </Typography>
             <Typography color="grey.400" gutterBottom>
                Gmail : gowthamsai0519@gmail.com
             </Typography>
              <Box>
  <Link
    href="https://github.com/Gowthamsai-k"
    underline="none"
    color="grey.400"
    sx={{
      mb: 1,
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <GitHubIcon sx={{ fontSize: 18 }} />
    <Typography variant="body2" color="grey.400">
      GitHub
    </Typography>
  </Link>

  <Link
    href="https://www.linkedin.com/in/gowtham-sai-k-54b8462a4/"
    underline="none"
    color="grey.400"
    sx={{
      mb: 1,
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <LinkedInIcon sx={{ fontSize: 18 }} />
    <Typography variant="body2" color="grey.400">
      LinkedIn
    </Typography>
  </Link>
</Box>

          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid #222",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Py-Lit all rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
