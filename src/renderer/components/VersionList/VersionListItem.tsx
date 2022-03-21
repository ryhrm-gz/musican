import {
  Badge,
  Box,
  Group,
  Paper,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Audio } from "../../db";

type Props = {
  audio: Audio;
  version: number;
};

export const VersionListItem = ({ audio, version }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: 110,
        cursor: "pointer",
      }}
    >
      <Paper
        withBorder
        radius={0}
        sx={{
          width: "100%",
          height: "100%",
          borderWidth: "0 0 1px 0",
          "&:hover": {
            backgroundColor: dark ? theme.colors.dark[9] : theme.colors.teal[1],
          },
        }}
        p="xs"
      >
        <Group direction="column" spacing="xs">
          <Badge size="sm" variant="light" radius="xs">
            V{version}
          </Badge>
          <Text size="xs" lineClamp={1}>
            {audio.createdAt.toLocaleString("ja-JP")}
          </Text>
          <Tooltip
            wrapLines
            label={audio.path}
            transition="fade"
            openDelay={500}
            width={300}
            gutter={-30}
          >
            <Text size="xs" lineClamp={2} color="dimmed">
              {audio.path}
            </Text>
          </Tooltip>
        </Group>
      </Paper>
    </Box>
  );
};
