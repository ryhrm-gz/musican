import { Grid, ScrollArea } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { HomeCard } from "./HomeCard";

export const HomeList = () => {
  const projects = useLiveQuery(() => db.projects.reverse().toArray());
  return (
    <ScrollArea style={{ height: "calc(100vh - 150px)" }} scrollbarSize={8}>
      <Grid mt={13} columns={42} gutter="lg" sx={{ width: "100%", margin: 0 }}>
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
    </ScrollArea>
  );
};
