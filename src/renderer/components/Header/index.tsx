import {
  Box,
  Group,
  Header as MantineHeader,
  useMantineColorScheme,
} from "@mantine/core";
import { Logo } from "../Logo";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={55} className="header">
      <Group position="apart" sx={{ width: "100%", height: "100%" }} px="xs">
        <Box></Box>
        <Logo
          style={{ width: "auto", height: 55 }}
          fill={dark ? "white" : "black"}
        />
        <HeaderMenu />
      </Group>
    </MantineHeader>
  );
};
