import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { Password } from "@mui/icons-material";

const AdminSignIn = () => {
  const { signIn } = useAuth();

  const [ password, setPassword ] = useState<string>('');

  const handleSignIn = async () => {
    if(!password) return;
    signIn(password);
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Paper
        className="h-auto w-[550px] flex flex-col items-center justify-center gap-8 py-16"
        elevation={10}
      >
        <Typography variant="h4">Admin SignIn</Typography>
        <div className="h-auto w-[440px] flex flex-col gap-4">
          <TextField
            variant="outlined"
            size="medium"
            fullWidth
            type="password"
            placeholder="Enter Password"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  children={<Password fontSize="small" />}  
                />
              )
            }}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Button
            size="large"
            variant="contained"
            onClick={handleSignIn}
            children="Sign In"
          />
        </div>
      </Paper>
    </div>
  )
}

export default AdminSignIn;