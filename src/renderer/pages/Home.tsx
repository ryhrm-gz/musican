import { Box, Center, Divider, Pagination, ScrollArea } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { ProjectList } from "../components/ProjectList";
import { HomeViewModeControls } from "../components/HomeViewModeControls";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useAtom, useAtomValue } from "jotai";
import { updatedSortState } from "../state/updatedSortState";
import { pageState } from "../state/pageState";

export const Home = () => {
  const updatedSort = useAtomValue(updatedSortState);
  const [page, setPage] = useAtom(pageState);
  const offset = (page - 1) * 20;

  const count = useLiveQuery(async () => await db.projects.count());

  const projects = useLiveQuery(async () => {
    if (updatedSort === "latest") {
      return await db.projects
        .where("id")
        .above(0)
        .offset(offset)
        .limit(20)
        .reverse()
        .sortBy("updatedAt");
    } else {
      return await db.projects
        .where("id")
        .above(0)
        .offset(offset)
        .limit(20)
        .sortBy("updatedAt");
    }
  }, [updatedSort, page]);

  return (
    <Box p="sm" pb={0}>
      <HomeButtons />
      <HomeViewModeControls />
      <Divider />
      <ScrollArea style={{ height: "calc(100vh - 150px)" }} scrollbarSize={8}>
        <ProjectList projects={projects} />
        {count && Math.ceil(count / 20) > 1 ? (
          <>
            <Divider my={20} />
            <Center>
              <Pagination
                total={Math.ceil(count / 20)}
                size="sm"
                pb={20}
                page={page}
                onChange={setPage}
              />
            </Center>
          </>
        ) : (
          ""
        )}
      </ScrollArea>
    </Box>
  );
};
