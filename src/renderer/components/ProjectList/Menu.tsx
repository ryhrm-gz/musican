import { Menu as MantineMenu } from "@mantine/core";
import { FilePlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { addFile } from "../../utils/addFile";
import { deleteProject } from "../../utils/deleteProject";
import { ChangeProjectNameModal } from "../ChangeProjectNameModal";

type Props = {
  id: number;
  onClick: (e: any) => void;
};

export const Menu = ({ id, onClick }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickAddFile = () => {
    inputRef?.current?.click();
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.type !== "audio/mpeg" && file.type !== "audio/wav") {
      alert("MP3 or WAVファイルを選択してください");
      event.target.value = "";
      return;
    }

    const name =
      file.name.substring(0, file.name.lastIndexOf(".")) || file.name;

    await addFile(id, file.name, file.path);
    event.target.value = "";
  };

  const handleClickDelete = async () => {
    await deleteProject(id);
  };

  return (
    <>
      <input
        hidden
        name="file"
        type="file"
        ref={inputRef}
        onChange={handleChangeInput}
        onClick={(e) => e.stopPropagation()}
        accept=".mp3,.wav"
      />
      <ChangeProjectNameModal
        projectId={id}
        opened={isModalOpen}
        setOpened={setIsModalOpen}
      />
      <MantineMenu className="header-menu" onClick={(e) => onClick(e)}>
        <MantineMenu.Item
          icon={<FilePlusIcon />}
          onClick={() => handleClickAddFile()}
        >
          ファイル追加
        </MantineMenu.Item>
        <MantineMenu.Item
          icon={<Pencil1Icon />}
          onClick={() => setIsModalOpen(true)}
        >
          名前変更
        </MantineMenu.Item>
        <MantineMenu.Item
          color="red"
          icon={<TrashIcon />}
          onClick={handleClickDelete}
        >
          削除
        </MantineMenu.Item>
      </MantineMenu>
    </>
  );
};
