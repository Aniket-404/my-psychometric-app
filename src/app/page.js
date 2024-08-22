// src/app/page.js
import React from 'react';
import Layout from './layout';
import QuestionContainer from '../components/QuestionContainer';

const HomePage = () => {
  return (
    <Layout>
      <h1>Psychometric Questionnaire</h1>
      <QuestionContainer />
    </Layout>
  );
};

export default HomePage;
