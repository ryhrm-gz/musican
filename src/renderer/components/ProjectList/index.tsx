import { Grid, ScrollArea, Table } from "@mantine/core";
import { useAtomValue } from "jotai";
import { Project } from "../../db";
import { viewModeState } from "../../state/viewModeState";
import { Card } from "./Card";
import { Row } from "./Row";

type Props = {
  projects?: Project[];
};

export const ProjectList = ({ projects }: Props) => {
  const viewMode = useAtomValue(viewModeState);

  if (!projects) {
    return null;
  }

  return (
    <>
      {viewMode === "grid" ? (
        <Grid
          mt={13}
          columns={42}
          gutter="lg"
          sx={{ width: "100%", margin: 0 }}
        >
          {projects.map((project) => {
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
                <Card {...project} />
              </Grid.Col>
            );
          })}
        </Grid>
      ) : (
        <Table verticalSpacing="sm" highlightOnHover>
          <thead>
            <tr>
              <th>名前</th>
              <th>バージョン</th>
              <th>更新日時</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return <Row key={project.id} {...project} />;
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};
