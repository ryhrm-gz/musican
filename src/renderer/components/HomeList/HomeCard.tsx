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

  const hasAudio = count !== 0;

  return (
    <Card
      shadow="md"
      p="sm"
      sx={{ width: "100%", height: "100%", cursor: "pointer" }}
    >
      <Group position="apart">
        <Badge
          color={hasAudio ? "green" : "gray"}
          size="sm"
          variant="light"
          radius="xs"
        >
          {hasAudio ? `V${count}` : "no files"}
        </Badge>
        <ListMenu id={id} />
      </Group>
      <Tooltip
        wrapLines
        label={name}
        transition="fade"
        openDelay={500}
        width={300}
        gutter={-30}
      >
        <Text
          size="sm"
          color={hasAudio ? "" : "dimmed"}
          lineClamp={3}
          mt={4}
          sx={{ overflowWrap: "anywhere" }}
        >
          {name}
        </Text>
      </Tooltip>
      <Text size="xs" color="dimmed" mt={6}>
        {updatedAt.toLocaleString("ja-JP")}
      </Text>
    </Card>
  );
};
