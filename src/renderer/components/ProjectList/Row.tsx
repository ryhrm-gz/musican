import { Badge } from "@mantine/core";
import { useNavigate } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { Menu } from "./Menu";

type Props = {
  id?: number;
  name: string;
  updatedAt: Date;
};

export const Row = ({ id, name, updatedAt }: Props) => {
  if (!id) {
    return null;
  }

  const navigate = useNavigate();

  const count = useLiveQuery(
    () => db.audios.where("projectId").equals(id).count(),
    [id]
  );

  const hasAudios = count !== 0;

  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => navigate({ to: `/project/${id}` })}
    >
      <td>{name}</td>
      <td>
        <Badge
          color={hasAudios ? "teal" : "gray"}
          size="sm"
          variant="light"
          radius="xs"
        >
          {count === undefined ? "" : count ? `V${count}` : "no files"}
        </Badge>
      </td>
      <td>{updatedAt.toLocaleString("ja-JP")}</td>
      <td>
        <Menu id={id} onClick={(e) => e.stopPropagation()} />
      </td>
    </tr>
  );
};
