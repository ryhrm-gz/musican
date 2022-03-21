import { Menu, useMantineColorScheme } from "@mantine/core";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-location";

export const HeaderMenu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Menu className="header-menu">
      <Menu.Item
        onClick={() => toggleColorScheme()}
        icon={dark ? <SunIcon /> : <MoonIcon />}
      >
        {dark ? "ライトモード" : "ダークモード"}
      </Menu.Item>
      <Menu.Item icon={<GearIcon />} component={Link} to="/settings">
        設定
      </Menu.Item>
    </Menu>
  );
};
