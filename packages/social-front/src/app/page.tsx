"use client";

import useSnackbar from "@/components/Feedback/Snackbar/reducer/hooks";
import Button from "@/components/Inputs/Buttons/Button";
import ControlTextField from "@/components/Inputs/TextFields/ControlTextField";

import Box from "@mui/material/Box";

import { useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<{
    value1: string;
    value2: string;
    value3: string;
  }>({
    values: {
      value1: "",
      value2: "",
      value3: "",
    },
  });

  const onSubmit = (value: {
    value1: string;
    value2: string;
    value3: string;
  }) => {
    console.error(value);
  };

  const onError = (error: FieldErrors) => {
    console.error(error);
  };

  const { openSnackbar } = useSnackbar();

  return (
    <Box>
      <Button onClick={() => router.push("/dev")}>View demo</Button>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit, onError)}>
        <ControlTextField control={control} name="value1" />
        <ControlTextField control={control} name="value3" />
        <ControlTextField control={control} name="value2" />
        <Button type="submit">Submit</Button>
      </Box>
      <Button
        onClick={() =>
          openSnackbar("test snackbar", "success", "top", "center")
        }
      >
        Test
      </Button>
    </Box>
  );
}
