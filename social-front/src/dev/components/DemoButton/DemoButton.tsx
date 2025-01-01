"use client";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@/components/Buttons/Button";
import IconButton from "@/components/Buttons/IconButton";

const DemoButton = () => {
  return (
    <Box p={2} display="flex" gap={2} flexDirection="column">
      <Typography variant="textH1">Demo Button</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained Primary</Button>
        <Button variant="outlined">Outlined Primary</Button>
        <Button variant="text">Text Primary</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="secondary">
          Contained Secondary
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined Secondary
        </Button>
        <Button variant="text" color="secondary">
          Text Secondary
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="error">
          Contained Error
        </Button>
        <Button variant="outlined" color="error">
          Outlined Error
        </Button>
        <Button variant="text" color="error">
          Text Error
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="warning">
          Contained Warning
        </Button>
        <Button variant="outlined" color="warning">
          Outlined Warning
        </Button>
        <Button variant="text" color="warning">
          Text Warning
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success">
          Contained Success
        </Button>
        <Button variant="outlined" color="success">
          Outlined Success
        </Button>
        <Button variant="text" color="success">
          Text Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="info">
          Contained Info
        </Button>
        <Button variant="outlined" color="info">
          Outlined Info
        </Button>
        <Button variant="text" color="info">
          Text Info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" disabled>
          Contained Disabled
        </Button>
        <Button variant="outlined" disabled>
          Outlined Disabled
        </Button>
        <Button variant="text" disabled>
          Text Disabled
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <IconButton icon="add" color="primary" />
      </Stack>
    </Box>
  );
};

export default DemoButton;
