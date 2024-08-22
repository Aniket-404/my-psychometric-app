import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Typography, Box } from '@mui/material';

const BinaryScaleQuestion = ({ question }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Binary Scale Question</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default BinaryScaleQuestion;
