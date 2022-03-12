import { Box, Button, Group } from "@mantine/core";
import { FilePlusIcon, PlusIcon } from "@radix-ui/react-icons";

export const HomeButtons = () => {
  return (
    <Box sx={{ width: "100%" }} mb={15}>
      <Group sx={{ width: "100%", height: "100%" }} position="right">
        <Group>
          <Button leftIcon={<PlusIcon />} variant="outline" size="xs">
            プロジェクト作成
          </Button>
          <Button size="xs" leftIcon={<FilePlusIcon />}>
            ファイル追加
          </Button>
        </Group>
      </Group>
    </Box>
  );
};
