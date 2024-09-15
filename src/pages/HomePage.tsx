import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { CreateResumeBox, ViewResumesBox, AskAIBox } from '../styles/HomePageStyles';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Resume Builder
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
      <Link to="/create-resume" style={{ textDecoration: 'none' }}>
          <CreateResumeBox>
            <Typography variant="h6">Create New Resume</Typography>
          </CreateResumeBox>
        </Link>
        <ViewResumesBox>
          <Typography variant="h6">View Saved Resumes</Typography>
        </ViewResumesBox>
        <AskAIBox>
          <Typography variant="h6">Ask AI for Help</Typography>
        </AskAIBox>
      </Box>
    </Container>
  );
};

export default HomePage;
