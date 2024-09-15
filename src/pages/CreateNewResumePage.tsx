import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { 
  FormContainer, 
  FormBox, 
  StyledTextField, 
  StyledFormControl, 
  StyledButton, 
  SaveButton
} from '../styles/CreateNewResumePageStyles';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  education: string;
  experience: string;
  skills: string;
  template: string;
}

const CreateNewResumePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
    template: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData(prevState => ({
      ...prevState,
      template: e.target.value as string
    }));
  };

  const handleSubmit = async () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text('Resume', 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Address: ${formData.address}`, 10, 50);
    doc.text(`Summary: ${formData.summary}`, 10, 60);
    doc.text(`Education: ${formData.education}`, 10, 70);
    doc.text(`Experience: ${formData.experience}`, 10, 80);
    doc.text(`Skills: ${formData.skills}`, 10, 90);
    doc.text(`Template: ${formData.template}`, 10, 100);

    // Save the PDF
    doc.save('resume.pdf');
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Save button clicked');
  };

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>Create New Resume
      </Typography>
      <SaveButton variant="contained" color="secondary" onClick={handleSave}>
        Save
      </SaveButton>
      <FormBox>
        <StyledTextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <StyledTextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <StyledTextField
          label="Experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <StyledTextField
          label="Skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <StyledFormControl fullWidth>
          <InputLabel>Resume Template</InputLabel>
          <Select
            name="template"
            value={formData.template}
            onChange={handleSelectChange}
            variant="outlined"
          >
            <MenuItem value="basic">Basic Template</MenuItem>
            <MenuItem value="picture">Template with Picture</MenuItem>
            <MenuItem value="iim">IIM Style Template</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledButton variant="contained" color="primary" onClick={handleSubmit}>
          Create Resume
        </StyledButton>
      </FormBox>
    </FormContainer>
  );
};

export default CreateNewResumePage;
