import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { HomeViewModeConstrol } from "../components/HomeViewModeControl";

export const Home = () => {
  return (
    <Box>
      <HomeButtons />
      <HomeViewModeConstrol />
      <Divider />
    </Box>
  );
};
