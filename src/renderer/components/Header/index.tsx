import {
  Box,
  Group,
  Header as MantineHeader,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { Logo } from "../Logo";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={50} className="header">
      <Group position="apart" sx={{ width: "100%", height: "100%" }} px="xs">
        <Box></Box>
        <Group spacing={0}>
          <Logo
            style={{ width: "auto", height: 50 }}
            fill={dark ? "white" : "black"}
          />
          <Text
            size="xs"
            weight={800}
            variant="gradient"
            gradient={{ from: "green", to: "cyan", deg: 45 }}
          >
            pre alpha
          </Text>
        </Group>
        <HeaderMenu />
      </Group>
    </MantineHeader>
  );
};
