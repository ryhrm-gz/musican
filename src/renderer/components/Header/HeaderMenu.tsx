import { Menu as MantineMenu, useMantineColorScheme } from "@mantine/core";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <MantineMenu>
      <MantineMenu.Item
        onClick={() => toggleColorScheme()}
        icon={dark ? <SunIcon /> : <MoonIcon />}
      >
        {dark ? "ライトモード" : "ダークモード"}
      </MantineMenu.Item>
      <MantineMenu.Item
        icon={<GearIcon />}
        component={Link}
        to="/settings/general"
      >
        設定
      </MantineMenu.Item>
    </MantineMenu>
  );
};
