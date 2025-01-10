import Stack from "@mui/material/Stack";
import { FocusSearchProps } from "./types";
import Popover from "@mui/material/Popover";
import IconButton from "@/components/Inputs/Buttons/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const FocusSearch = ({ children, open, handleClose }: FocusSearchProps) => {
  return (
    <Popover
      open={open}
      onClose={handleClose}
      marginThreshold={0}
      slotProps={{
        paper: {
          sx: {
            width: 330,
          },
        },
      }}
    >
      <Stack direction="row" p={1} spacing={1} alignItems="center">
        <IconButton
          icon="arrow_back"
          onClick={handleClose}
          sx={{
            color: "common.black",
          }}
        />
        {children}
      </Stack>
      <Divider />
      <Stack p={2} alignItems={"center"}>
        <Typography>Không có tìm kiếm nào gần đây</Typography>
      </Stack>
    </Popover>
  );
};

export default FocusSearch;
