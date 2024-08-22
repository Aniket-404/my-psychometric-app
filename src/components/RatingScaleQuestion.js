import React from 'react';
import { Slider, Typography, Box } from '@mui/material';

const RatingScaleQuestion = ({ question, min, max }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Rating Scale Question</Typography>
      <Typography>{question}</Typography>
      <Slider defaultValue={min} min={min} max={max} aria-labelledby="rating-scale" />
    </Box>
  );
};

export default RatingScaleQuestion;
