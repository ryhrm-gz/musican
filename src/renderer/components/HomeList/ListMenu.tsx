import { Menu } from "@mantine/core";
import { FilePlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { IndexableType } from "dexie";

type Props = {
  id: number;
};

export const ListMenu = ({ id }: Props) => {
  return (
    <Menu className="header-menu">
      <Menu.Item icon={<FilePlusIcon />}>ファイル追加</Menu.Item>
      <Menu.Item icon={<Pencil1Icon />}>名前変更</Menu.Item>
      <Menu.Item color="red" icon={<TrashIcon />}>
        削除
      </Menu.Item>
    </Menu>
  );
};
