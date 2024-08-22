import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Typography, Box } from '@mui/material';

const LikertScaleQuestion = ({ question, options }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Likert Scale Question</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup>
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default LikertScaleQuestion;
