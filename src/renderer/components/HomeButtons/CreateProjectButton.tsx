import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { PlusIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { createProject } from "../../utils/createProject";

export const CreateProjectButton = () => {
  const [opened, setOpened] = useState(false);
  const [typing, setTyping] = useState(false);
  const [name, setName] = useInputState("");
  const [error, setError] = useState("");

  const validate = () => name.replace(/\s/g, "").length === 0;

  const handleClickButton = () => {
    if (validate()) {
      setError("プロジェクト名を入力してください");
      return;
    }
    createProject(name)
      .then(() => {
        setOpened(false);
        setName("");
      })
      .catch(() => {
        alert("プロジェクトの作成に失敗しました");
      });
  };

  useEffect(() => {
    setError("");
  }, [name]);

  return (
    <>
      <Modal
        title="プロジェクトを作成"
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
            作成
          </Button>
        </Group>
      </Modal>
      <Button
        leftIcon={<PlusIcon />}
        variant="outline"
        size="xs"
        onClick={() => setOpened(true)}
      >
        プロジェクト作成
      </Button>
    </>
  );
};
