import { Group } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { HomeCard } from "./HomeCard";

export const HomeList = () => {
  const projects = useLiveQuery(() => db.projects.toArray());
  return (
    <Group mt={13}>
      {projects?.map((project) => {
        return <HomeCard key={project.id} {...project} />;
      })}
    </Group>
  );
};
