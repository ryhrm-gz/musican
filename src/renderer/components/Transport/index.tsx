import { ActionIcon, Box, Group, Paper, Slider, Text } from "@mantine/core";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { useAtom, useAtomValue } from "jotai";
import { RefObject, useEffect, useState } from "react";
import { currentTimeState } from "../../state/currentTimeState";
import { durationState } from "../../state/durationState";
import { volumeState } from "../../state/volumeState";

type Props = {
  waveSurferRef: RefObject<WaveSurfer>;
  currentVersionIndex: number;
};

export const Transport = ({ waveSurferRef, currentVersionIndex }: Props) => {
  const [playing, setPlaying] = useState(false);
  const currentTime = useAtomValue(currentTimeState);
  const currentTimeMin = String(Math.trunc(currentTime / 60)).padStart(2, "0");
  const currentTimeSec = String(Math.trunc(currentTime % 60)).padStart(2, "0");
  const duration = useAtomValue(durationState);
  const durationMin = String(Math.trunc(duration / 60)).padStart(2, "0");
  const durationSec = String(Math.trunc(duration % 60)).padStart(2, "0");
  const [volume, setVolume] = useAtom(volumeState);

  const handleClickPlay = () => {
    waveSurferRef.current?.playPause();
    setPlaying(waveSurferRef.current?.isPlaying() ?? false);
  };

  const handleVolumeChange = (value: number) => {
    waveSurferRef.current?.setVolume(value / 100);
    setVolume(value);
  };

  useEffect(() => {
    setPlaying(waveSurferRef.current?.isPlaying() ?? false);
  }, [currentVersionIndex]);

  return (
    <Box sx={{ height: 55, width: "100%" }}>
      <Paper withBorder sx={{ width: "100%", height: "100%" }} radius={0}>
        <Group sx={{ width: "100%", height: "100%" }} position="center">
          <ActionIcon size="lg" onClick={handleClickPlay}>
            {playing ? (
              <PauseIcon height={18} width={18} />
            ) : (
              <PlayIcon height={18} width={18} />
            )}
          </ActionIcon>
          <Group spacing="xs" position="center">
            <Text size="sm" sx={{ cursor: "default", fontFamily: "monospace" }}>
              {currentTimeMin}:{currentTimeSec}
            </Text>
            <Text size="xs" color="dimmed" sx={{ fontFamily: "monospace" }}>
              /
            </Text>
            <Text size="sm" color="dimmed" sx={{ fontFamily: "monospace" }}>
              {durationMin}:{durationSec}
            </Text>
          </Group>
          <Group spacing="xs" position="center">
            <Slider
              sx={{ width: 120 }}
              size="sm"
              radius="xs"
              step={1}
              value={volume}
              onChange={(value: number) => handleVolumeChange(value)}
            />
          </Group>
        </Group>
      </Paper>
    </Box>
  );
};
