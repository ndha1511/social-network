import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const PostLoading = () => {
  return (
    <Paper
      sx={{
        width: 590,
        height: 605,
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 2,
      }}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Skeleton variant="circular" width={40} height={40} />
        <Stack>
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width={80} />
        </Stack>
      </Stack>
      <Skeleton variant="rounded" width={"100%"} height={"80%"} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={4}
      >
        <Skeleton variant="text" width={150} height={40} />
        <Skeleton variant="text" width={150} height={40} />
        <Skeleton variant="text" width={150} height={40} />
      </Stack>
    </Paper>
  );
};

export default PostLoading;
