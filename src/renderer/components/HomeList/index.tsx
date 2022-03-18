import { Grid, ScrollArea } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { useAtomValue } from "jotai";
import { db } from "../../db";
import { updatedSortState } from "../../state/updatedSortState";
import { viewModeState } from "../../state/viewModeState";
import { HomeCard } from "./HomeCard";

export const HomeList = () => {
  const updatedSort = useAtomValue(updatedSortState);
  const viewMode = useAtomValue(viewModeState);
  const projects = useLiveQuery(() => {
    if (updatedSort === "latest") {
      return db.projects.where("id").above(0).reverse().sortBy("updatedAt");
    } else {
      return db.projects.where("id").above(0).sortBy("updatedAt");
    }
  }, [updatedSort]);
  return (
    <ScrollArea style={{ height: "calc(100vh - 150px)" }} scrollbarSize={8}>
      {viewMode === "grid" ? (
        <Grid
          mt={13}
          columns={42}
          gutter="lg"
          sx={{ width: "100%", margin: 0 }}
        >
          {projects?.map((project) => {
            return (
              <Grid.Col
                key={project.id}
                sx={{ minHeight: "210px" }}
                span={21}
                xs={14}
                sm={10.5}
                md={8.4}
                lg={7}
                xl={6}
              >
                <HomeCard {...project} />
              </Grid.Col>
            );
          })}
        </Grid>
      ) : (
        ""
      )}
    </ScrollArea>
  );
};
