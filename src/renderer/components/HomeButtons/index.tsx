import { Box, Group } from "@mantine/core";
import { AddFileButton } from "./AddFileButton";
import { CreateProjectButton } from "./CreateProjectButton";

export const HomeButtons = () => {
  return (
    <Box sx={{ width: "100%" }} mb={15}>
      <Group sx={{ width: "100%", height: "100%" }} position="right">
        <Group>
          <CreateProjectButton />
          <AddFileButton />
        </Group>
      </Group>
    </Box>
  );
};
