import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import Textfield from "./components/FormsUI/Textfield";
import Select from "./components/FormsUI/Select";
import DateTimePicker from "./components/FormsUI/DataTimePicker";
import Checkbox from "./components/FormsUI/Checkbox";
import Button from "./components/FormsUI/Button";
import countries from "./data/countries.json";
import { addfirebaseData } from "./addfirebase";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              // validationSchema={FORM_VALIDATION}
              onSubmit={(values, { resetForm }) => {

                // add firebase to add values in store
                addfirebaseData(values);
                resetForm();
                alert("Your form submited");
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone" type="number" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1 " />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2 " />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="city" label="Enter City" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="state" label=" Enter State " />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>
                  <Grid itme xs={6}>
                    <DateTimePicker name="arrivealDate" label="ArrivealDate" />
                  </Grid>
                  <Grid itme xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="DepartureDate"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="TermsOfService"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button> Submit</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
