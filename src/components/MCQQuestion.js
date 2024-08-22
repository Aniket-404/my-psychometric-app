import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';

const MCQQuestion = ({ question, options }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Multiple Choice Question</Typography>
      <InputLabel>{question}</InputLabel>
      <FormControl fullWidth>
        <Select defaultValue="" displayEmpty>
          <MenuItem value="" disabled>Select an option</MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MCQQuestion;
