import { ActionIcon, Box, Group, Paper, Text } from "@mantine/core";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { RefObject, useEffect, useState } from "react";

type Props = {
  waveSurferRef: RefObject<WaveSurfer>;
};

export const Transport = ({ waveSurferRef }: Props) => {
  const [playing, setPlaying] = useState(false);

  const handleClickPlay = () => {
    const isPlaying = waveSurferRef.current?.isPlaying();

    if (isPlaying) {
      waveSurferRef.current?.pause();
      setPlaying(false);
    } else {
      waveSurferRef.current?.play();
      setPlaying(true);
    }
  };

  return (
    <Box sx={{ height: 55, width: "100%" }}>
      <Paper withBorder sx={{ width: "100%", height: "100%" }} radius={0}>
        <Group sx={{ width: "100%", height: "100%" }}>
          <ActionIcon size="lg" onClick={handleClickPlay}>
            {playing ? (
              <PauseIcon height={20} width={20} />
            ) : (
              <PlayIcon height={20} width={20} />
            )}
          </ActionIcon>
        </Group>
      </Paper>
    </Box>
  );
};
