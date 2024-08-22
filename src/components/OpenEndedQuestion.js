import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const OpenEndedQuestion = ({ question }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Open-Ended Question</Typography>
      <TextField
        label={question}
        multiline
        rows={4}
        fullWidth
        variant="outlined"
      />
    </Box>
  );
};

export default OpenEndedQuestion;
