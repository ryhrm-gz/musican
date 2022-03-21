import { Box, Group, Overlay, Transition } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useRef, useState } from "react";
import { ProjectHeader } from "../components/ProjectHeader";
import { Transport } from "../components/Transport";
import { VersionList } from "../components/VersionList";
import { Wave } from "../components/Wave";
import { db } from "../db";

export const Project = () => {
  const { id } = useMatch().params;

  const [loading, setLoading] = useState(true);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  const waveSurferRef = useRef<WaveSurfer>(null);

  const project = useLiveQuery(async () => await db.projects.get(Number(id)));
  const audios = useLiveQuery(
    async () =>
      await db.audios.where("projectId").equals(Number(id)).reverse().toArray()
  );

  useEffect(() => {
    setLoading(true);
    const path = audios?.[0]?.path;

    if (waveSurferRef.current && path) {
      waveSurferRef.current.load(path);
      setCurrentVersionIndex(0);
    }
  }, [audios]);

  if (!project || !audios) {
    return null;
  }

  return (
    <Box>
      <Transition
        mounted={loading}
        transition="fade"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Overlay mt={50} color="#000" zIndex={50} blur={2} style={styles} />
        )}
      </Transition>
      <ProjectHeader
        id={Number(id)}
        name={project.name}
        updatedAt={project.updatedAt}
      />
      <Group grow spacing={0} sx={{ width: "100%", height: "100%" }}>
        <Wave audios={audios} ref={waveSurferRef} setLoading={setLoading} />
        <VersionList
          audios={audios}
          waveSurferRef={waveSurferRef}
          setCurrentVersionIndex={setCurrentVersionIndex}
          currentVersionIndex={currentVersionIndex}
          setLoading={setLoading}
        />
      </Group>
      <Transport
        waveSurferRef={waveSurferRef}
        currentVersionIndex={currentVersionIndex}
      />
    </Box>
  );
};
