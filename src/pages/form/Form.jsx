import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /[0-9]/;
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit = () => {
    console.log("done");
    handleClick()
  };
  const data = [
    {
      value: "admin",
      label: "admin",
    },
    {
      value: "manager",
      label: "manager",
    },
    {
      value: "user",
      label: "user",
    },
  ];
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        textTransform:'lowercase'
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={'CREATE USER'} subTitle={"Create a New User Profile"} />
      <Stack direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "This field is required & min 3 character" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="first name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This field is required & min 3 character" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1, ml: 2 }}
          label="last name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "please provide a valide email" : null}
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: regEmail,
        })}
        label="email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={
          errors.contactNumber ? "please provide a valide phone number" : null
        }
        {...register("contactNumber", {
          required: true,
          minLength: 3,
          pattern: regPhone,
        })}
        label="contact number"
        variant="filled"
      />
      <TextField label="address 1" variant="filled" />
      <TextField label="address 2" variant="filled" />
      <Box>
        <TextField
          id="filled-select-currency"
          select
          label="role"
          defaultValue="user"
          variant="filled"
          fullWidth
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Form;
