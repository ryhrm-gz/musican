import { Box, Paper, Group, ActionIcon, Text } from "@mantine/core";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-location";

export const SettingsHeader = () => {
  return (
    <Box sx={{ width: "100%", height: 55 }}>
      <Paper
        withBorder
        sx={{ width: "100%", height: "100%", borderWidth: "0 0 1px 0" }}
        radius={0}
      >
        <Group sx={{ width: "100%", height: "100%" }}>
          <ActionIcon
            component={Link}
            to="/"
            size="xl"
            radius={0}
            sx={{ height: "100%", width: 55 }}
          >
            <ChevronLeftIcon />
          </ActionIcon>
          <Text weight={600} size="sm">
            設定
          </Text>
        </Group>
      </Paper>
    </Box>
  );
};
