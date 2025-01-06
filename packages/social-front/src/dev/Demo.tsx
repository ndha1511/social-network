import Stack from "@mui/material/Stack";
import DemoTextField from "./components/DemoTexField/DemoTextField";
import DemoTextFieldForm from "./components/DemoTextFieldForm.tsx/DemoTextFieldForm";
import DemoButton from "./components/DemoButton/DemoButton";

const Demo = () => {
  return (
    <Stack spacing={2}>
      <DemoTextField />
      <DemoTextFieldForm />
      <DemoButton />
    </Stack>
  );
};

export default Demo;
