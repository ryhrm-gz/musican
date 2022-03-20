import { ActionIcon, Box, Group, Paper, Text } from "@mantine/core";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-location";
import { AddFileButton } from "../AddFileButton";

type Props = {
  id: number;
  name: string;
  updatedAt: Date;
};

export const ProjectHeader = ({ id, name, updatedAt }: Props) => {
  return (
    <Box sx={{ width: "100%", height: 55 }}>
      <Paper
        withBorder
        sx={{ width: "100%", height: "100%", borderWidth: "0 0 1px 0" }}
        radius={0}
      >
        <Group sx={{ width: "100%", height: "100%" }} position="apart" pr={12}>
          <Group sx={{ height: "100%" }} spacing="xs">
            <ActionIcon
              component={Link}
              to="/"
              size="xl"
              radius={0}
              sx={{ height: "100%", width: 55 }}
            >
              <ChevronLeftIcon />
            </ActionIcon>
            <Box>
              <Text weight={600} size="sm">
                {name}
              </Text>
              <Text color="dimmed" size="xs">
                更新日時 : {updatedAt.toLocaleString("ja-JP")}
              </Text>
            </Box>
          </Group>
          <AddFileButton id={id} />
        </Group>
      </Paper>
    </Box>
  );
};
