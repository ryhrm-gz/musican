import { Box } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { ProjectHeader } from "../components/ProjectHeader";
import { db } from "../db";

export const Project = () => {
  const { id } = useMatch().params;
  const project = useLiveQuery(async () => await db.projects.get(Number(id)));
  const audios = useLiveQuery(
    async () => await db.audios.where("projectId").equals(Number(id)).toArray()
  );

  if (!project) {
    return null;
  }

  return (
    <Box>
      <ProjectHeader name={project.name} updatedAt={project.updatedAt} />
    </Box>
  );
};
