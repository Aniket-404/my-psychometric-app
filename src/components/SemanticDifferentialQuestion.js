import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Typography, Box } from '@mui/material';

const SemanticDifferentialQuestion = ({ question, labels }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Semantic Differential Question</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup>
          {labels.map((label, index) => (
            <FormControlLabel key={index} value={label} control={<Radio />} label={label} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SemanticDifferentialQuestion;
