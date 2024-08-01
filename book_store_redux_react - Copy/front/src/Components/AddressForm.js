import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AddressForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    Object.keys(formValues).forEach(field => {
      if (!formValues[field]) newErrors[field] = `${field} is required`;
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      fetch('/api/submitAddress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormValues({
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          country: '',
        });
        navigate('/order'); // Redirect to order status page
      })
      .catch((error) => console.error('Error:', error));
    } else {
      setErrors(newErrors);
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Container maxWidth="sm"> {/* Container to limit the form's width and center it */}
            <Typography variant="h4" gutterBottom>Shipping Address</Typography> {/* Form title */}
            <form onSubmit={handleSubmit}> {/* Form submission handler */}
                <Grid container spacing={2}> {/* Grid container to layout the form fields */}
                    {Object.keys(formValues).map(field => (
                        <Grid item xs={12} sm={field === 'zip' || field === 'country' ? 6 : 12} key={field}>
                            <TextField
                                fullWidth
                                id={field}
                                name={field}
                                label={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize the first letter of the label
                                value={formValues[field]} // Set the field value from state
                                onChange={handleChange} // Handle changes to the input field
                                error={!!errors[field]} // Show error styling if there's an error for this field
                                helperText={errors[field]} // Display error message
                            />
                        </Grid>
                    ))}
                </Grid>
                <Button className="mt-4" color="primary" variant="contained" type="submit" fullWidth>Submit</Button> {/* Submit button */}
            </form>
        </Container>
  );
};

export default AddressForm;
