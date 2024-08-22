import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Box, FormHelperText } from '@mui/material';

const RankingQuestion = ({ question, items }) => {
  const [rankings, setRankings] = useState({});

  const handleChange = (event, index) => {
    const value = event.target.value;
    setRankings((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Ranking Question</Typography>
      <InputLabel>{question}</InputLabel>
      <FormControl component="fieldset">
        {items.map((item, index) => (
          <Box key={item} mb={2}>
            {/* <InputLabel>{item}</InputLabel> */}
            <h3>{item}</h3>
            <Select
              value={rankings[index] || ''}
              onChange={(e) => handleChange(e, index)}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>Select rank</MenuItem>
              {[...Array(items.length).keys()].map((rank) => (
                <MenuItem key={rank + 1} value={rank + 1}>
                  {rank + 1}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ))}
        <FormHelperText>Assign a unique rank to each item.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default RankingQuestion;
