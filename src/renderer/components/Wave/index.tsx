import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor";
import { WaveForm, WaveSurfer } from "wavesurfer-react";
import { PluginType } from "wavesurfer-react/dist/containers/WaveSurfer";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Audio } from "../../db";
import { useAtom, useSetAtom } from "jotai";
import { currentTimeState } from "../../state/currentTimeState";
import { durationState } from "../../state/durationState";
import { volumeState } from "../../state/volumeState";

type Props = {
  audios: Audio[];
  setLoading: (loading: boolean) => void;
};

export const Wave = forwardRef<WaveSurfer, Props>((props, ref) => {
  const setCurrentTime = useSetAtom(currentTimeState);
  const setDuration = useSetAtom(durationState);
  const [volume, setVolume] = useAtom(volumeState);

  const waveSurferRef = useRef<WaveSurfer | null>(null);
  useImperativeHandle(ref, () => waveSurferRef.current!);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const cursorPlugin: PluginType = {
    plugin: CursorPlugin,
    options: {
      showTime: true,
      color: dark ? theme.colors.gray[2] : theme.colors.dark[5],
      opacity: 1,
      customShowTimeStyle: {
        "background-color": dark ? theme.colors.gray[2] : theme.colors.dark[5],
        color: dark ? theme.colors.dark[5] : theme.colors.gray[2],
        padding: "4px",
        "border-radius": "4px",
        "font-size": "12px",
      },
    },
  };
  const plugins: PluginType[] = [cursorPlugin];

  useEffect(() => {
    const path = props.audios?.[0]?.path;

    if (waveSurferRef.current && path) {
      waveSurferRef.current.load(path);
    }

    return () => waveSurferRef.current?.destroy();
  }, []);

  useEffect(() => {
    waveSurferRef.current?.setWaveColor(
      dark ? theme.colors.dark[3] : theme.colors.gray[4]
    );
    waveSurferRef.current?.setProgressColor(
      dark ? theme.colors.teal[8] : theme.colors.teal[4]
    );
    waveSurferRef.current?.setCursorColor(
      dark ? theme.colors.teal[8] : theme.colors.teal[4]
    );
  }, [dark]);

  const handleMount = (waveSurfer: WaveSurfer) => {
    waveSurferRef.current = waveSurfer;

    waveSurferRef.current.on("ready", () => {
      const currentVolume =
        waveSurferRef.current?.getVolume() === 1
          ? volume / 100
          : waveSurferRef.current?.getVolume();
      waveSurferRef.current?.setVolume(currentVolume ?? 0.1);
      setCurrentTime(0);
      setDuration(waveSurferRef.current?.getDuration() ?? 0);
      props.setLoading(false);
    });

    waveSurferRef.current.on("audioprocess", () => {
      setCurrentTime(waveSurferRef.current?.getCurrentTime() ?? 0);
    });

    waveSurferRef.current.on("seek", () => {
      setCurrentTime(waveSurferRef.current?.getCurrentTime() ?? 0);
    });
  };

  return (
    <Box sx={{ flex: 1 }} p="xs">
      <WaveSurfer plugins={plugins} onMount={handleMount}>
        <WaveForm
          id="waveform"
          responsive
          hideScrollbar
          height={200}
          barWidth={3}
          barGap={3}
          waveColor={dark ? theme.colors.dark[3] : theme.colors.gray[4]}
          progressColor={dark ? theme.colors.teal[8] : theme.colors.teal[4]}
          cursorColor={dark ? theme.colors.teal[8] : theme.colors.teal[4]}
        />
      </WaveSurfer>
    </Box>
  );
});
