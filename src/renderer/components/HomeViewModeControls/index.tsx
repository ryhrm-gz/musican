import { Box, Center, Group, SegmentedControl } from "@mantine/core";
import { GridIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { viewModeState } from "../../state/viewModeState";
import { UpdatedDateTimeSortButton } from "../UpdatedDatetimeSortButton";

export const HomeViewModeControls = () => {
  const [viewMode, setViewMode] = useAtom(viewModeState);
  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Group sx={{ width: "100%", height: "100%" }} position="apart">
        <UpdatedDateTimeSortButton />
        <Box>
          <SegmentedControl
            value={viewMode}
            onChange={(value) => setViewMode(value as "grid" | "rows")}
            size="sm"
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
                value: "rows",
                label: (
                  <Center>
                    <HamburgerMenuIcon />
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
