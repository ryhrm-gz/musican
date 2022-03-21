import { Box } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { useRef } from "react";
import { ProjectHeader } from "../components/ProjectHeader";
import { Wave } from "../components/Wave";
import { db } from "../db";

export const Project = () => {
  const { id } = useMatch().params;
  const waveSurferRef = useRef<WaveSurfer>(null);

  const project = useLiveQuery(async () => await db.projects.get(Number(id)));

  if (!project) {
    return null;
  }

  return (
    <Box>
      <ProjectHeader
        id={Number(id)}
        name={project.name}
        updatedAt={project.updatedAt}
      />
      <Wave id={Number(id)} ref={waveSurferRef} />
    </Box>
  );
};
