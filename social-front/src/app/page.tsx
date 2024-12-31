"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Button onClick={() => router.push("/dev")}>View Demo</Button>
    </Box>
  );
}
