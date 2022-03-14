import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { createProject } from "../../utils/createProject";

export const CreateProjectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  const form = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) =>
        value.replace(/\s/g, "").length === 0
          ? "プロジェクト名を入力してください"
          : null,
    },
  });

  const handleSubmit = async (values: { name: string }) => {
    const name = values.name.trim();
    const result = await createProject(name);
    if (!result) {
      alert("プロジェクトの作成に失敗しました");
    }
    setIsOpen(false);
    form.reset();
    return;
  };

  return (
    <>
      <Modal
        title="プロジェクトを作成"
        opened={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="プロジェクト名"
            size="sm"
            mb={15}
            data-autofocus
            {...form.getInputProps("name")}
          />
          <Group position="right">
            <Button type="submit" size="xs">
              作成
            </Button>
          </Group>
        </form>
      </Modal>
      <Button
        leftIcon={<PlusIcon />}
        variant="outline"
        size="xs"
        onClick={openModal}
      >
        プロジェクト作成
      </Button>
    </>
  );
};