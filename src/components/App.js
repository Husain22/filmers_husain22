import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import useAlan from './Alan';

import { Actors, Movies, MovieInforamtion, NavBar, Profile } from '.';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInforamtion />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>

      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
