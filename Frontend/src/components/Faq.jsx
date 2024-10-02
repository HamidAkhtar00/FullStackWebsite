// FAQComponent.jsx
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GlassesIcon from '@mui/icons-material/Visibility';

const FAQComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "How do I know my glasses prescription?",
      answer: "Your prescription can be determined by an eye doctor after a detailed eye exam."
    },
    {
      question: "What are blue light glasses?",
      answer: "Blue light glasses help block or filter out the harmful blue light emitted from digital screens."
    },
    {
      question: "How often should I change my glasses?",
      answer: "It's recommended to update your glasses every two years, or when your prescription changes."
    },
    {
      question: "Can I order glasses online?",
      answer: "Yes, many online retailers offer prescription glasses, but ensure you have a valid prescription."
    },
    {
      question: "Are polarized lenses better for sunglasses?",
      answer: "Polarized lenses reduce glare, making them better for driving, outdoor activities, and reducing eye strain."
    }
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 ,marginBottom:4}}>
      <Box display="flex" justifyContent="center" mb={4}>
        <GlassesIcon fontSize="large" />
        <Typography variant="h4" component="h2" sx={{ marginLeft: 2 }}>
          Glasses FAQs
        </Typography>
      </Box>

      {faqs.map((faq, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQComponent;
