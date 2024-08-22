import React from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';

const ChecklistQuestion = ({ question, options }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Checklist Question</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <FormGroup>
          {options.map((option, index) => (
            <FormControlLabel key={index} control={<Checkbox />} label={option} />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default ChecklistQuestion;
