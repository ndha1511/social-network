import Stack from "@mui/material/Stack";
import DemoTextField from "./components/DemoTexField/DemoTextField";
import DemoTextFieldForm from "./components/DemoTextFieldForm.tsx/DemoTextFieldForm";

const Demo = () => {
  return (
    <Stack spacing={2}>
      <DemoTextField />
      <DemoTextFieldForm />
    </Stack>
  );
};

export default Demo;
