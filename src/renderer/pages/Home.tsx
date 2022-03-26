import { Box, Center, Divider, Pagination, ScrollArea } from "@mantine/core";
import { HomeButtons } from "../components/HomeButtons";
import { ProjectList } from "../components/ProjectList";
import { HomeControls } from "../components/HomeControls";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useAtom, useAtomValue } from "jotai";
import { updatedDatetimeSortState } from "../state/updatedDatetimeSortState";
import { pageState } from "../state/pageState";
import { useEffect } from "react";
import { perPageState } from "../state/perPageState";

export const Home = () => {
  const updatedSort = useAtomValue(updatedDatetimeSortState);
  const [page, setPage] = useAtom(pageState);
  const perPage = useAtomValue(perPageState);
  const offset = (page - 1) * perPage;

  const count = useLiveQuery(async () => await db.projects.count());

  const projects = useLiveQuery(async () => {
    if (updatedSort === "latest") {
      return await db.projects
        .where("id")
        .above(0)
        .offset(offset)
        .limit(perPage)
        .reverse()
        .sortBy("updatedAt");
    } else {
      return await db.projects
        .where("id")
        .above(0)
        .offset(offset)
        .limit(perPage)
        .sortBy("updatedAt");
    }
  }, [updatedSort, page, perPage]);

  useEffect(() => {
    if (projects?.length === 0) {
      setPage(1);
    }
  }, [projects]);

  return (
    <Box p="sm" pb={0}>
      <HomeButtons />
      <HomeControls />
      <Divider />
      <ScrollArea style={{ height: "calc(100vh - 150px)" }} scrollbarSize={8}>
        <ProjectList projects={projects} />
        {count && Math.ceil(count / perPage) > 1 ? (
          <>
            <Divider my={20} />
            <Center>
              <Pagination
                total={Math.ceil(count / perPage)}
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
