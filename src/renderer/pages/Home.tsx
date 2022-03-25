import { Box, Divider } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { ProjectList } from "../components/ProjectList";
import { HomeViewModeControls } from "../components/HomeViewModeControls";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useAtomValue } from "jotai";
import { updatedSortState } from "../state/updatedSortState";

export const Home = () => {
  const updatedSort = useAtomValue(updatedSortState);

  const projects = useLiveQuery(async () => {
    if (updatedSort === "latest") {
      return await db.projects
        .where("id")
        .above(0)
        .reverse()
        .sortBy("updatedAt");
    } else {
      return await db.projects.where("id").above(0).sortBy("updatedAt");
    }
  }, [updatedSort]);

  return (
    <Box p="sm" pb={0}>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
      <ProjectList projects={projects} />
    </Box>
  );
};
