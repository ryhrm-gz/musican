import { Grid } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";
import { HomeCard } from "./HomeCard";

export const HomeList = () => {
  const projects = useLiveQuery(() => db.projects.toArray());
  return (
    <Grid mt={13} columns={42} gutter="lg">
      {projects?.map((project) => {
        return (
          <Grid.Col
            key={project.id}
            sx={{ minHeight: "210px" }}
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
  );
};
