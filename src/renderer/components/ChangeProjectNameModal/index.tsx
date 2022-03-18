import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Dispatch, SetStateAction } from "react";
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
    const result = await changeProjectName(projectId, name);
    if (!result) {
      alert("名前の変更に失敗しました");
    }
    setOpened(false);
    form.reset();
    return;
  };

  return (
    <Modal
      title="プロジェクトの名前変更"
      opened={opened}
      onClose={() => setOpened(false)}
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
            更新
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
