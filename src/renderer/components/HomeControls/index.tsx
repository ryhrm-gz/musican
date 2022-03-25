import { Box, Center, Group, SegmentedControl } from "@mantine/core";
import { GridIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { viewModeState } from "../../state/viewModeState";
import { PerPageSelect } from "../PerPageSelect";
import { UpdatedDatetimeSortButton } from "../UpdatedDatetimeSortButton";
import { ViewModeSelect } from "../ViewModeSelect";

export const HomeControls = () => {
  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Group sx={{ width: "100%", height: "100%" }} position="apart">
        <UpdatedDatetimeSortButton />
        <Group>
          <PerPageSelect />
          <ViewModeSelect />
        </Group>
      </Group>
    </Box>
  );
};
