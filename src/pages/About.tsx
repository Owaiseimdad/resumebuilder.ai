// src/pages/AboutPage.tsx

import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is a free resume builder application designed to help users create professional resumes with ease.
        Our goal is to provide a user-friendly tool that simplifies the resume creation process.
      </Typography>
    </Container>
  );
};

export default AboutPage;
