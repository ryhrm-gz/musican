import { Badge, Card, Group, Text, Tooltip } from "@mantine/core";
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

  const count = useLiveQuery(() =>
    db.audios.where("projectId").equals(id).count()
  );

  if (count === 0) {
    return (
      <Card
        shadow="md"
        p="sm"
        sx={{ width: "100%", height: "100%", cursor: "pointer" }}
      >
        <Group position="apart">
          <Badge color="gray" size="sm" variant="light" radius="xs">
            no files
          </Badge>
          <ListMenu />
        </Group>
        <Tooltip
          wrapLines
          label={name}
          transition="fade"
          openDelay={500}
          width={200}
          gutter={-30}
        >
          <Text
            size="sm"
            color="dimmed"
            lineClamp={3}
            mt={4}
            sx={{ overflowWrap: "anywhere" }}
          >
            {name}
          </Text>
        </Tooltip>
        <Text size="xs" color="dimmed" mt={6}>
          {createdAt.toLocaleString("ja-JP")}
        </Text>
      </Card>
    );
  }

  return (
    <Card
      shadow="md"
      p="sm"
      sx={{ width: "100%", height: "100%", cursor: "pointer" }}
    >
      <Group position="apart">
        <Badge color="green" size="sm" variant="light" radius="xs">
          V{count}
        </Badge>
        <ListMenu />
      </Group>
      <Tooltip
        wrapLines
        label={name}
        transition="fade"
        openDelay={500}
        width={200}
        gutter={-30}
      >
        <Text size="sm" lineClamp={3} mt={4} sx={{ overflowWrap: "anywhere" }}>
          {name}
        </Text>
      </Tooltip>
      <Text size="xs" color="dimmed" mt={6}>
        {updatedAt.toLocaleString("ja-JP")}
      </Text>
    </Card>
  );
};
