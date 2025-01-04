"use client";

import Button from "@/components/Inputs/Buttons/Button";
import Box from "@mui/material/Box";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Button onClick={() => router.push("/dev")}>View demo</Button>
    </Box>
  );
}
