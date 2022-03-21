import { Badge, Card, Group, Text, Tooltip } from "@mantine/core";
import { Link } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { ListMenu } from "./ListMenu";

type Props = {
  id?: number;
  name: string;
  updatedAt: Date;
};

export const HomeCard = ({ id, name, updatedAt }: Props) => {
  if (!id) {
    return null;
  }

  const count = useLiveQuery(
    () => db.audios.where("projectId").equals(id).count(),
    [id]
  );

  const hasAudios = count !== 0;

  return (
    <Card
      shadow="md"
      p="sm"
      sx={{ width: "100%", height: "100%", cursor: "pointer" }}
      component={Link}
      to={`/project/${id}`}
    >
      <Group position="apart">
        <Badge
          color={hasAudios ? "teal" : "gray"}
          size="sm"
          variant="light"
          radius="xs"
        >
          {count === undefined ? "" : count ? `V${count}` : "no files"}
        </Badge>
        <ListMenu id={id} onClick={(e) => e.preventDefault()} />
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
          color={hasAudios ? "" : "dimmed"}
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
