import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useFormik } from "formik";
import * as yup from "yup";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const validationSchema = yup.object({
  username: yup.string().required("username is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export default function Login() {
  const classes = useStyles();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };
  return (
    <Fragment>
      <NextSeo
        title="Login | MTs TechnoNatura"
        description="Login member komunits MTs TechnoNatura"
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: "Halaman Login - MTs TechnoNatura",
          description: "Login member komunits MTs TechnoNatura"
        }}
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" align="center" variant="h5">
            Sign in to MTs TechnoNatura Account
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="primary"
                />
              }
              label="Remember me"
              id="rememberme"
              name="rememberme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signup">
                  <p className="underline inline-block	cursor-pointer	">
                    Don't have an account? Sign Up
                  </p>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link href="/">
        <p className="underline inline-block	cursor-pointer	">MTs TechnoNatura</p>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
