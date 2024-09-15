import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Roboto, sans-serif' }}>
            Resume Builder
          </Link>
        </Typography>
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          sx={{ flexGrow: 1 }}
          aria-label="navigation tabs"
        >
          <Tab
            label="Home"
            component={Link}
            to="/"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              '&.Mui-selected': {
                color: '#e0e0e0', // Lighter gray for selected tab
              },
            }}
          />
          <Tab
            label="Templates"
            component={Link}
            to="/templates"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              '&.Mui-selected': {
                color: '#e0e0e0', // Lighter gray for selected tab
              },
            }}
          />
          <Tab
            label="About"
            component={Link}
            to="/about"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              '&.Mui-selected': {
                color: '#e0e0e0', // Lighter gray for selected tab
              },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
