import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { HomeViewModeConstrols } from "../components/HomeViewModeControls";

export const Home = () => {
  return (
    <Box>
      <HomeButtons />
      <HomeViewModeConstrols />
      <Divider />
    </Box>
  );
};
