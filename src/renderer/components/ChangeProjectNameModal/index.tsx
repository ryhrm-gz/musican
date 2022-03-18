import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { changeProjectName } from "../../utils/changeProjectName";

type Props = {
  projectId: number;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  defaultName: string;
};

export const ChangeProjectNameModal = ({
  projectId,
  opened,
  setOpened,
  defaultName,
}: Props) => {
  const [name, setName] = useInputState(defaultName);
  const [error, setError] = useState("");

  const validate = () => name.replace(/\s/g, "").length === 0;

  const handleClickButton = () => {
    if (validate()) {
      setError("プロジェクト名を入力してください");
      return;
    }
    changeProjectName(projectId, name)
      .then(() => {
        setOpened(false);
      })
      .catch(() => {
        alert("プロジェクトの作成に失敗しました");
      });
  };

  useEffect(() => {
    setError("");
  }, [name]);

  return (
    <Modal
      title="プロジェクトの名前変更"
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <TextInput
        label="プロジェクト名"
        size="sm"
        mb={15}
        data-autofocus
        value={name}
        onChange={setName}
        error={error}
      />
      <Group position="right">
        <Button size="xs" onClick={handleClickButton}>
          更新
        </Button>
      </Group>
    </Modal>
  );
};
