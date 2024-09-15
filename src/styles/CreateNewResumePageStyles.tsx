import { styled } from '@mui/material/styles';
import { Container, Box, TextField, Button, FormControl } from '@mui/material';

// Container for the form
export const FormContainer = styled(Container)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  padding: theme.spacing(3),
}));

// FormBox for layout
export const FormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

// Styled TextField
export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
  },
}));

// Styled FormControl
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontFamily: 'Roboto, sans-serif',
  },
  '& .MuiSelect-root': {
    fontFamily: 'Roboto, sans-serif',
  },
}));

// Styled Button
export const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  padding: theme.spacing(1, 4),
  fontFamily: 'Roboto, sans-serif',
}));

// Save button on top right
export const SaveButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  top: theme.spacing(-1),
  left: theme.spacing(0),
  fontFamily: 'Roboto, sans-serif',
}));