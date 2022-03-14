import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { HomeViewModeControls } from "../components/HomeViewModeControls";

export const Home = () => {
  return (
    <Box>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
    </Box>
  );
};
