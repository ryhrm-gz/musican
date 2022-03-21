import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Paper,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { MouseEventHandler } from "react";
import { Audio } from "../../db";

type Props = {
  audio: Audio;
  version: number;
  isCurrent: boolean;
  index: number;
  setVersion: (index: number) => void;
};

export const VersionListItem = ({
  audio,
  version,
  isCurrent,
  index,
  setVersion,
}: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const handleClickItem = () => {
    setVersion(index);
  };

  const handleClickOpenFolder = async (e: any) => {
    e.stopPropagation();
    const response = await window.api.openFolder(audio.path);

    if (response.status === "error") {
      alert("フォルダを開くことができませんでした");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 115,
        cursor: "pointer",
      }}
      onClick={handleClickItem}
    >
      <Paper
        withBorder
        radius={0}
        sx={{
          width: "100%",
          height: "100%",
          borderWidth: "0 0 1px 0",
          backgroundColor: isCurrent
            ? dark
              ? theme.colors.dark[9]
              : theme.colors.teal[1]
            : dark
            ? theme.colors.dark[7]
            : theme.colors.white,
          "&:hover": {
            backgroundColor: dark ? theme.colors.dark[9] : theme.colors.teal[1],
          },
        }}
        p="xs"
      >
        <Group direction="column" spacing="xs" sx={{ position: "relative" }}>
          <Tooltip
            label="フォルダを開く"
            sx={{ position: "absolute", top: 0, right: 15 }}
          >
            <ActionIcon
              variant="light"
              size="md"
              onClick={(e: any) => handleClickOpenFolder(e)}
            >
              <OpenInNewWindowIcon />
            </ActionIcon>
          </Tooltip>
          <Badge size="sm" variant="light" radius="xs">
            V{version}
          </Badge>
          <Text size="sm" lineClamp={1}>
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
