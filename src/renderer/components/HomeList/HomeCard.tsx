import { Badge, Card, Group, Text } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { ListMenu } from "./ListMenu";

type Props = {
  id?: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
};

export const HomeCard = ({ id, name, updatedAt, createdAt }: Props) => {
  if (!id) {
    return null;
  }

  const count = useLiveQuery(() => db.audios.where("id").equals(id).count());

  if (count === 0) {
    return (
      <Card
        shadow="md"
        p="sm"
        sx={{ width: "100%", height: "100%", cursor: "pointer" }}
      >
        <Group position="apart">
          <Badge color="gray" size="xs" variant="light" radius="xs" px={0}>
            Project
          </Badge>
          <ListMenu />
        </Group>
        <Text size="sm" color="dimmed" lineClamp={4} mt={4}>
          {name}
        </Text>
        <Text size="xs" color="dimmed" mt={6}>
          ファイルなし
        </Text>
        <Text size="xs" color="dimmed" mt={6}>
          {createdAt.toLocaleString("ja-JP")}
        </Text>
      </Card>
    );
  }

  return (
    <Card>
      <h3>{name}</h3>
    </Card>
  );
};
