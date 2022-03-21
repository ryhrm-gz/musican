import { Box, Group } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { useRef } from "react";
import { ProjectHeader } from "../components/ProjectHeader";
import { VersionList } from "../components/VersionList";
import { Wave } from "../components/Wave";
import { db } from "../db";

export const Project = () => {
  const { id } = useMatch().params;
  const waveSurferRef = useRef<WaveSurfer>(null);

  const project = useLiveQuery(async () => await db.projects.get(Number(id)));
  const audios = useLiveQuery(
    async () => await db.audios.where("projectId").equals(Number(id)).toArray()
  );

  if (!project || !audios) {
    return null;
  }

  return (
    <Box>
      <ProjectHeader
        id={Number(id)}
        name={project.name}
        updatedAt={project.updatedAt}
      />
      <Group grow spacing={0} sx={{ width: "100%", height: "100%" }}>
        <Wave audios={audios} ref={waveSurferRef} />
        <VersionList />
      </Group>
    </Box>
  );
};
