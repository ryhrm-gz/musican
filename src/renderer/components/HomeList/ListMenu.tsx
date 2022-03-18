import { Menu } from "@mantine/core";
import { FilePlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useRef } from "react";
import { addFile } from "../../utils/addFile";

type Props = {
  id: number;
};

export const ListMenu = ({ id }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.click();
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file) return;
    if (file.type !== "audio/mpeg" && file.type !== "audio/wav") {
      alert("MP3 or WAVファイルを選択してください");
      event.target.value = "";
      return;
    }
    await addFile(id, file.name, file.path);
    event.target.value = "";
  };

  return (
    <>
      <input
        hidden
        name="file"
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept=".mp3,.wav"
      />
      <Menu className="header-menu">
        <Menu.Item icon={<FilePlusIcon />} onClick={handleClick}>
          ファイル追加
        </Menu.Item>
        <Menu.Item icon={<Pencil1Icon />}>名前変更</Menu.Item>
        <Menu.Item color="red" icon={<TrashIcon />}>
          削除
        </Menu.Item>
      </Menu>
    </>
  );
};
