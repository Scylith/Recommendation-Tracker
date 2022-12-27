import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Test() {
  const classes = useStyles;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <div>
          <Typography variant="h2" gutterBottom>Welcome to My App</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Test;