import { Box, SegmentedControl, Center } from "@mantine/core";
import { GridIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { viewModeState } from "../../state/viewModeState";

export const ViewModeSelect = () => {
  const [viewMode, setViewMode] = useAtom(viewModeState);

  return (
    <Box>
      <SegmentedControl
        value={viewMode}
        onChange={(value) => setViewMode(value as "grid" | "rows")}
        size="md"
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
  );
};
