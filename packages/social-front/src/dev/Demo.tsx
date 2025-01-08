import Stack from "@mui/material/Stack";
import DemoTextField from "./components/DemoTexField/DemoTextField";
import DemoTextFieldForm from "./components/DemoTextFieldForm.tsx/DemoTextFieldForm";
import DemoButton from "./components/DemoButton/DemoButton";
import DemoTabs from "./components/DemoTabs/DemoTabs";

const Demo = () => {
  return (
    <Stack spacing={2}>
      <DemoTextField />
      <DemoTextFieldForm />
      <DemoButton />
      <DemoTabs />
    </Stack>
  );
};

export default Demo;
