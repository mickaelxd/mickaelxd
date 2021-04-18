import React from 'react';
import Link from 'next/link';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';

import styles from './Header.module.css';
import { routes } from './constants';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={styles.center}>
          <Typography variant="h6">Mickael Rocha</Typography>
          <Box>
            {routes.map(route => (
              <Link href={route.path} passHref key={route.name}>
                <Button color="inherit">{route.name}</Button>
              </Link>
            ))}
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
