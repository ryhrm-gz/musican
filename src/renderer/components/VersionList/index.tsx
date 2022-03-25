import { Box, Paper, ScrollArea, Text } from "@mantine/core";
import { RefObject } from "react";
import { Audio } from "../../db";
import { Item } from "./Item";

type Props = {
  audios: Audio[];
  waveSurferRef: RefObject<WaveSurfer>;
  currentVersionIndex: number;
  setCurrentVersionIndex: (index: number) => void;
  setLoading: (loading: boolean) => void;
};

export const VersionList = ({
  audios,
  waveSurferRef,
  currentVersionIndex,
  setCurrentVersionIndex,
  setLoading,
}: Props) => {
  const setVersion = (index: number) => {
    setLoading(true);
    setCurrentVersionIndex(index);
    waveSurferRef.current?.load(audios[index].path);
  };

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
          const isCurrent = index === currentVersionIndex;
          return (
            <Item
              key={audio.id}
              audio={audio}
              version={audios.length - index}
              isCurrent={isCurrent}
              index={index}
              setVersion={setVersion}
            />
          );
        })}
      </ScrollArea>
    </Paper>
  );
};
