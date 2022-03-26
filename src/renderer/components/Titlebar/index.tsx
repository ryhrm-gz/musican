import {
  Box,
  Group,
  Header as MantineHeader,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { Logo } from "../Logo";
import { Menu } from "./Menu";

export const Titlebar = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={50} className="header">
      <Group position="apart" sx={{ width: "100%", height: "100%" }} px="xs">
        <Box></Box>
        <Group spacing={5}>
          <Logo
            style={{ width: "auto", height: 25 }}
            fill={dark ? "white" : "black"}
          />
        </Group>
        <Menu />
      </Group>
    </MantineHeader>
  );
};
