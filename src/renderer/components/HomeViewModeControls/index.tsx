import { Box, Button, Center, Group, SegmentedControl } from "@mantine/core";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  GridIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { updatedSortState } from "../../state/updatedSortState";
import { viewModeState } from "../../state/viewModeState";

export const HomeViewModeControls = () => {
  const [updatedSort, setUpdatedSort] = useAtom(updatedSortState);
  const [viewMode, setViewMode] = useAtom(viewModeState);

  const updatedSortIcon =
    updatedSort === "latest" ? <ArrowDownIcon /> : <ArrowUpIcon />;
  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Group sx={{ width: "100%", height: "100%" }} position="apart">
        <Button
          compact
          pl={3}
          size="xs"
          color="gray"
          variant="subtle"
          rightIcon={updatedSortIcon}
          onClick={() =>
            setUpdatedSort(updatedSort === "latest" ? "oldest" : "latest")
          }
        >
          更新日時
        </Button>
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
