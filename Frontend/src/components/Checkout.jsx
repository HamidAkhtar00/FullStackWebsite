import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, TextField, Button, Typography, Grid, Paper,Divider } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
  const location = useLocation();
  const { subtotal, totalSavings } = location.state || { subtotal: 0, totalSavings: 0 };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('Town/City is required'),
    state: Yup.string().required('County/State is required'),
    zip: Yup.string().required('Postcode / ZIP is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log('Form Values', values);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>Billing Details</Typography>

      <Grid container spacing={3}>
        {/* Left: Billing Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 3 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Field
                        name="firstName"
                        as={TextField}
                        fullWidth
                        label="First Name*"
                        variant="outlined"
                        helperText={<ErrorMessage name="firstName" />}
                        error={<ErrorMessage name="firstName" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        name="lastName"
                        as={TextField}
                        fullWidth
                        label="Last Name*"
                        variant="outlined"
                        helperText={<ErrorMessage name="lastName" />}
                        error={<ErrorMessage name="lastName" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="country"
                        as={TextField}
                        fullWidth
                        label="Country*"
                        variant="outlined"
                        helperText={<ErrorMessage name="country" />}
                        error={<ErrorMessage name="country" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="address"
                        as={TextField}
                        fullWidth
                        label="Address*"
                        variant="outlined"
                        placeholder="Street Address"
                        helperText={<ErrorMessage name="address" />}
                        error={<ErrorMessage name="address" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="city"
                        as={TextField}
                        fullWidth
                        label="Town/City*"
                        variant="outlined"
                        helperText={<ErrorMessage name="city" />}
                        error={<ErrorMessage name="city" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="state"
                        as={TextField}
                        fullWidth
                        label="County/State*"
                        variant="outlined"
                        helperText={<ErrorMessage name="state" />}
                        error={<ErrorMessage name="state" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="zip"
                        as={TextField}
                        fullWidth
                        label="Postcode / ZIP*"
                        variant="outlined"
                        helperText={<ErrorMessage name="zip" />}
                        error={<ErrorMessage name="zip" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        name="phone"
                        as={TextField}
                        fullWidth
                        label="Phone*"
                        variant="outlined"
                        helperText={<ErrorMessage name="phone" />}
                        error={<ErrorMessage name="phone" />}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Field
                        name="email"
                        as={TextField}
                        fullWidth
                        label="Email*"
                        variant="outlined"
                        helperText={<ErrorMessage name="email" />}
                        error={<ErrorMessage name="email" />}
                      />
                    </Grid>
                  </Grid>
                  
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>

        {/* Right: Order Summary */}
        <Box 
        sx={{ width: '300px',height:'300px', border: '1px solid #ddd', padding: 3, borderRadius: '8px' ,margin:1 }}
      >
        <Typography variant="h6" sx={{ mb: 2 }} style={{color:'#006064'}}>Order Summary</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">Rs. {subtotal}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">You Save</Typography>
          <Typography variant="body1" color="green">Rs. {totalSavings}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">Rs. {subtotal}</Typography>
        </Box>
        <Button 
          variant="contained" 
          sx={{ mt: 3, width: '100%',marginTop:7, backgroundColor: '#006064', '&:hover': { backgroundColor: '#004d40' }, color: 'white' }}
          
        >
          Place Order
        </Button>
      </Box>
      </Grid>
    </Box>
  );
};

export default Checkout;
