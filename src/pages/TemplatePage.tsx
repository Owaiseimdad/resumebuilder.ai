import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { BasicTemplateBox, PictureTemplateBox, IIMTemplateBox } from '../styles/TemplatesPageStyles';

const TemplatesPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Choose a Template
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <BasicTemplateBox>
          <Typography variant="h6">Basic Template</Typography>
        </BasicTemplateBox>
        <PictureTemplateBox>
          <Typography variant="h6">Template with Picture</Typography>
        </PictureTemplateBox>
        <IIMTemplateBox>
          <Typography variant="h6">IIM Style Template</Typography>
        </IIMTemplateBox>
      </Box>
    </Container>
  );
};

export default TemplatesPage;
