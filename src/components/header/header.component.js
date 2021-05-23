import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 80,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ title }) {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
      localStorage.setItem("loggedIn", "");
      history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button onClick={() => logout()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
    title: PropTypes.string,
  };
