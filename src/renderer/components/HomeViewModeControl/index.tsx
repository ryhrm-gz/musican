import { Box, Button, Center, Group, SegmentedControl } from "@mantine/core";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  GridIcon,
  RowsIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export const HomeViewModeConstrol = () => {
  const [updatedSort, setUpdatedSort] = useState("latest");
  const updatedSortIcon =
    updatedSort === "latest" ? <ArrowDownIcon /> : <ArrowUpIcon />;
  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Group sx={{ width: "100%", height: "100%" }} position="apart">
        <Button
          size="xs"
          color="gray"
          variant="subtle"
          rightIcon={updatedSortIcon}
          onClick={() =>
            setUpdatedSort(updatedSort === "latest" ? "oldest" : "latest")
          }
        >
          更新日
        </Button>
        <Box>
          <SegmentedControl
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
