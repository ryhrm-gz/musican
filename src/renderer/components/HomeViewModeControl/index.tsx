import { Box, Center, Group, SegmentedControl } from "@mantine/core";
import { GridIcon, RowsIcon } from "@radix-ui/react-icons";

export const HomeViewModeConstrol = () => {
  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Group sx={{ width: "100%", height: "100%" }} position="right">
        <Box>
          <SegmentedControl
            data={[
              {
                value: "grid",
                label: (
                  <Center>
                    <GridIcon />
                  </Center>
                ),
              },
              {
                value: "list",
                label: (
                  <Center>
                    <RowsIcon />
                  </Center>
                ),
              },
            ]}
          />
        </Box>
      </Group>
    </Box>
  );
};
