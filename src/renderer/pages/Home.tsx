import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { HomeList } from "../components/HomeList";
import { HomeViewModeControls } from "../components/HomeViewModeControls";

export const Home = () => {
  return (
    <Box>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
      <HomeList />
    </Box>
  );
};
