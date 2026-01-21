import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { HashLink } from 'react-router-hash-link';

const pages = ['home', 'about'];


function NavigationBar() {


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar
      position="fixed"
      sx={{
        transform: 'translateX(-200%)',
        borderRadius: '20px',
        margin: '20px auto',
        backgroundColor: 'rgba(29, 29, 29, 1)',
        width: '20%',
        '&:hover': {
          boxShadow: '0 12px 30px rgba(193, 192, 192, 0.6)',
          transform: 'translateX(-200%) translateY(-2px)',
        },
      }}
    >
      <Container maxWidth="m" style = {{ display : "flex" }}>
        <Toolbar disableGutters>

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>

            
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={HashLink}
                to={`/#${page}`}
                smooth
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
