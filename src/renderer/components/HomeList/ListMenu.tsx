import { Menu } from "@mantine/core";
import { FilePlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useRef, useState } from "react";
import { addFile } from "../../utils/addFile";
import { ChangeProjectNameModal } from "../ChangeProjectNameModal";

type Props = {
  id: number;
  name: string;
};

export const ListMenu = ({ id, name }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickAddFile = () => {
    inputRef?.current?.click();
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
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
        onChange={handleChangeInput}
        accept=".mp3,.wav"
      />
      <ChangeProjectNameModal
        projectId={id}
        opened={isModalOpen}
        setOpened={setIsModalOpen}
        defaultName={name}
      />
      <Menu className="header-menu">
        <Menu.Item icon={<FilePlusIcon />} onClick={handleClickAddFile}>
          ファイル追加
        </Menu.Item>
        <Menu.Item icon={<Pencil1Icon />} onClick={() => setIsModalOpen(true)}>
          名前変更
        </Menu.Item>
        <Menu.Item color="red" icon={<TrashIcon />}>
          削除
        </Menu.Item>
      </Menu>
    </>
  );
};
