import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  const handleNext = () => {
    if (currentPage !== totalPages) setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage !== 1) setPage((prev) => prev - 1);
  };

  if (totalPages === 0) return null;
  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} type="button" variant="contained" color="primary">Prev</Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button onClick={handleNext} className={classes.button} type="button" variant="contained" color="primary">Next</Button>
    </div>
  );
};

export default Pagination;
