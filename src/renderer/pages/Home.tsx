import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { ProjectList } from "../components/ProjectList";
import { HomeViewModeControls } from "../components/HomeViewModeControls";

export const Home = () => {
  return (
    <Box p="sm" pb={0}>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
      <ProjectList />
    </Box>
  );
};
