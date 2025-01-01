"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FieldErrors, useForm } from "react-hook-form";
import { useState } from "react";
import ControlTextField from "@/components/Inputs/ControlTextField";
import Button from "@/components/Buttons/Button";

const DemoTextFieldForm = () => {
  const [result, setResult] = useState("");
  const { control, handleSubmit } = useForm<{ value: string }>({
    values: {
      value: "demo hook form",
    },
  });

  const onSubmit = (data: { value: string }) => {
    setResult(data.value);
  };

  const onError = (error: FieldErrors) => {
    console.error(error);
  };
  return (
    <Box
      p={2}
      display="flex"
      gap={2}
      component="form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Typography variant="textH2">
        Demo TextField With React Hook Form
      </Typography>
      <ControlTextField control={control} name="value" helperText={result} />
      <Box>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default DemoTextFieldForm;
