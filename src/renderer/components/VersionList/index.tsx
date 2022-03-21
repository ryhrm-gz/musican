import { Box, Paper, ScrollArea, Text } from "@mantine/core";
import { RefObject } from "react";
import { Audio } from "../../db";
import { VersionListItem } from "./VersionListItem";

type Props = {
  audios: Audio[];
  waveSurferRef: RefObject<WaveSurfer>;
};

export const VersionList = ({ audios, waveSurferRef }: Props) => {
  return (
    <Paper
      withBorder
      sx={{
        width: 220,
        height: "calc(100vh - 160px)",
        borderWidth: "0 0 0 1px",
      }}
      radius={0}
    >
      <ScrollArea
        style={{ width: "100%", height: "calc(100vh - 160px)" }}
        scrollbarSize={8}
      >
        {audios.map((audio, index) => {
          return (
            <VersionListItem
              key={audio.id}
              audio={audio}
              version={audios.length - index}
            />
          );
        })}
      </ScrollArea>
    </Paper>
  );
};
