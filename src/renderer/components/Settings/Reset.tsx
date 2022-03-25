import { Box, Button, Center, Loader, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { CheckIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { db } from "../../db";
import { Card } from "./Card";

type Item = {
  label: string;
  value: string | ReactNode;
};

export const Reset = () => {
  const modals = useModals();
  const notifications = useNotifications();

  const DeleteDB = () => {
    modals.openModal({
      title: "データを削除中...",
      centered: true,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <Center>
          <Loader color="red" variant="bars" />
        </Center>
      ),
    });

    db.delete()
      .then(() => {
        db.open()
          .then(() => {
            modals.closeAll();
            notifications.showNotification({
              icon: <CheckIcon />,
              message: "データを削除しました",
            });
          })
          .catch(() => {
            modals.closeAll();
            notifications.showNotification({
              color: "red",
              title: "データベースに接続できません",
              message: "Musicanを再起動してください",
            });
          });
      })
      .catch(() => {
        modals.closeAll();
        notifications.showNotification({
          color: "red",
          message: "データベースの削除に失敗しました",
        });
      });
  };

  const openDataResetModal = () => {
    modals.openConfirmModal({
      title: "データを削除しますか？",
      centered: true,
      closeOnConfirm: false,
      children: <Text size="sm">全てのデータを削除します。</Text>,
      labels: { confirm: "削除", cancel: "キャンセル" },
      confirmProps: { color: "red" },
      onConfirm: () => DeleteDB(),
    });
  };

  const items: Item[] = [
    {
      label: "全データを削除",
      value: (
        <Button size="xs" color="red" onClick={openDataResetModal}>
          削除
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <Card items={items} />
    </Box>
  );
};
