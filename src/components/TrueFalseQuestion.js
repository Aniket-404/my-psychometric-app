import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Typography, Box } from '@mui/material';

const TrueFalseQuestion = ({ question }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>True/False Question</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup>
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default TrueFalseQuestion;
