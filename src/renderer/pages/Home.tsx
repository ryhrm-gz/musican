import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { HomeList } from "../components/HomeList";
import { HomeViewModeControls } from "../components/HomeViewModeControls";

export const Home = () => {
  return (
    <Box p="sm" pb={0}>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
      <HomeList />
    </Box>
  );
};
