import { Card } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

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
      <Card>
        <h3>{name}</h3>
      </Card>
    );
  }

  return (
    <Card>
      <h3>{name}</h3>
    </Card>
  );
};
