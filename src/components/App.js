import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Actors, Movies, MovieInforamtion, NavBar, Profile } from '.';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes>
          <Route path={['/', '/approved']} element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInforamtion />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>

      </main>
    </div>
  );
};

export default App;
