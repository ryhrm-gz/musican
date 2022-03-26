import { Menu as MantineMenu, useMantineColorScheme } from "@mantine/core";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-location";

export const Menu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <MantineMenu className="header-menu">
      <MantineMenu.Item
        onClick={() => toggleColorScheme()}
        icon={dark ? <SunIcon /> : <MoonIcon />}
      >
        {dark ? "ライトモード" : "ダークモード"}
      </MantineMenu.Item>
      <MantineMenu.Item icon={<GearIcon />} component={Link} to="/settings">
        設定
      </MantineMenu.Item>
    </MantineMenu>
  );
};
