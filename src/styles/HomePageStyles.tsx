import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// Base styled Box component for each section
export const StyledBox = styled(Box)(({ theme }) => ({
  width: 200,
  height: 400,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s, background-color 0.3s',
  backgroundColor: '#333', // Dark gray
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
    backgroundColor: '#555', // Slightly lighter gray on hover
  },
  fontFamily: 'Roboto, sans-serif',
}));

// Specific styles for each section
export const CreateResumeBox = styled(StyledBox)({});
export const ViewResumesBox = styled(StyledBox)({});
export const AskAIBox = styled(StyledBox)({});
