'use client';

import React, { useState } from 'react';
import MCQQuestion from './MCQQuestion';
import LikertScaleQuestion from './LikertScaleQuestion';
import RatingScaleQuestion from './RatingScaleQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import RankingQuestion from './RankingQuestion';
import OpenEndedQuestion from './OpenEndedQuestion';
import SemanticDifferentialQuestion from './SemanticDifferentialQuestion';
import ChecklistQuestion from './ChecklistQuestion';
import BinaryScaleQuestion from './BinaryScaleQuestion';
import { Box, Button } from '@mui/material';

const questions = [
  { type: 'MCQ', question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
  { type: 'LikertScale', question: 'I feel satisfied with my job.', options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'] },
  { type: 'RatingScale', question: 'How often do you exercise?', min: 1, max: 10 },
  { type: 'TrueFalse', question: 'Do you enjoy coding?' },
  { type: 'Ranking', question: 'Rank the following hobbies from most to least favorite:', items: ['Reading', 'Gaming', 'Cooking', 'Traveling'] },
  { type: 'OpenEnded', question: 'Describe your ideal vacation.' },
  { type: 'SemanticDifferential', question: 'Rate your experience with our service:', labels: ['Poor', 'Excellent'] },
  { type: 'Checklist', question: 'Which of the following activities have you done?', options: ['Hiking', 'Swimming', 'Biking', 'Running'] },
  { type: 'BinaryScale', question: 'Do you prefer tea over coffee?' }
];

const QuestionContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const renderQuestion = () => {
    const { type, question, options, min, max, items, labels } = questions[currentIndex];
    
    switch (type) {
      case 'MCQ':
        return <MCQQuestion question={question} options={options} />;
      case 'LikertScale':
        return <LikertScaleQuestion question={question} options={options} />;
      case 'RatingScale':
        return <RatingScaleQuestion question={question} min={min} max={max} />;
      case 'TrueFalse':
        return <TrueFalseQuestion question={question} />;
      case 'Ranking':
        return <RankingQuestion question={question} items={items} />;
      case 'OpenEnded':
        return <OpenEndedQuestion question={question} />;
      case 'SemanticDifferential':
        return <SemanticDifferentialQuestion question={question} labels={labels} />;
      case 'Checklist':
        return <ChecklistQuestion question={question} options={options} />;
      case 'BinaryScale':
        return <BinaryScaleQuestion question={question} />;
      default:
        return null;
    }
  };

  return (
    <Box p={4}>
      <Box mb={2} fontWeight="bold">
        {questions[currentIndex].type} Question
      </Box>
      {renderQuestion()}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleNextQuestion}>
          Next Question
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionContainer;
