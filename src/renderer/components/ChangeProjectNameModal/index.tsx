import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { useLiveQuery } from "dexie-react-hooks";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { db } from "../../db";
import { changeProjectName } from "../../utils/changeProjectName";

type Props = {
  projectId: number;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export const ChangeProjectNameModal = ({
  projectId,
  opened,
  setOpened,
}: Props) => {
  const [typing, setTyping] = useState(false);
  const [name, setName] = useInputState("");
  const [error, setError] = useState("");

  const project = useLiveQuery(
    async () => await db.projects.get(projectId),
    [projectId]
  );

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

  useEffect(() => {
    setName(project?.name || "");
  }, [opened]);

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
        onCompositionStart={() => setTyping(true)}
        onCompositionEnd={() => setTyping(false)}
        onChange={setName}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !typing) {
            e.preventDefault();
            handleClickButton();
          }
        }}
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
