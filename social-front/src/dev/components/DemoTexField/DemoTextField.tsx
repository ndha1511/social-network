import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@/components/Inputs/TextField";
import SearchIcon from "@mui/icons-material/Search";

const DemoTextField = () => {
  return (
    <Box p={2} display="flex" gap={2} flexDirection="column">
      <Typography variant="textH1">Demo TextField</Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>normal TextField</Typography>
        <Box>
          <TextField placeholder="demo text field" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>icon TexField</Typography>
        <Box>
          <TextField
            placeholder="icon text field"
            slotProps={{
              input: {
                endAdornment: <SearchIcon />,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DemoTextField;
