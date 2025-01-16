import Box from "@mui/material/Box/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { MessageLoadingProps } from "./types";

const defaultLoadingWidth = 200;
const defaultLoadingHeight = 500;

const MessageLoading = ({
  width = defaultLoadingWidth,
  height = defaultLoadingHeight,
}: MessageLoadingProps) => {
  // eslint-disable-next-line no-magic-numbers -- size of 1 skeleton
  const countSkeleton = Math.trunc(height / 60);
  const [randomWidths, setRandomWidths] = useState<number[]>([]);

  useEffect(() => {
    const widths = Array.from({ length: countSkeleton }).map(
      // eslint-disable-next-line no-magic-numbers
      () => Math.floor(Math.random() * (defaultLoadingWidth - 80 + 1)) + 80
    );
    setRandomWidths(widths);
  }, [countSkeleton]);

  return (
    <Box
      width={width}
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      p={1}
      gap={2}
    >
      {Array.from({ length: countSkeleton }).map((_, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rounded" width={randomWidths[index]} height={20} />
        </Stack>
      ))}
    </Box>
  );
};

export default MessageLoading;
