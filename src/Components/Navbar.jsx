import React, { useState } from 'react';
import '../index.css';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import resumePDF from '../../public/CV Sebastian Prado.pdf';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleResumeClick = () => {
    window.open(resumePDF, '_blank');
  };

  const menuItems = [
    { label: 'Home', onClick: () => {} },
    { label: 'Projects', onClick: () => {} },
    { label: 'About', onClick: () => {} },
    { label: 'Resume', onClick: handleResumeClick },
  ];

  return (
    <>  
      <div className='navbarContainerLarge'>    
        <ThemeProvider theme={theme}>
          <Box className="main-container">
            <AppBar position="static" className="custom-app-bar" sx={{ backgroundColor: 'black' }}>
              <Toolbar className="custom-toolbar">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Box className="button-container">
                  {menuItems.map((item) => (
                    <Button key={item.label} className="custom-button" sx={{ color: 'white' }} onClick={item.onClick}>
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.label} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
      </div>
    </>
  );
}

export default Navbar;