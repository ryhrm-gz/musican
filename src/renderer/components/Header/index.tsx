import { Box, Group, Header as MantineHeader } from "@mantine/core";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <MantineHeader height={60}>
      <Group position="apart" sx={{ width: "100%", height: "100%" }} px="xs">
        <Logo style={{ width: "auto", height: 60 }} />
      </Group>
    </MantineHeader>
  );
};
