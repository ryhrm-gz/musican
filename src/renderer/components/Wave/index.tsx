import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor";
import { WaveForm, WaveSurfer } from "wavesurfer-react";
import { PluginType } from "wavesurfer-react/dist/containers/WaveSurfer";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Audio } from "../../db";

type Props = {
  audios: Audio[];
  setLoading: (loading: boolean) => void;
};

export const Wave = forwardRef<WaveSurfer, Props>((props, ref) => {
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
      props.setLoading(false);
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
          barRadius={3}
          barGap={3}
          waveColor={dark ? theme.colors.dark[3] : theme.colors.gray[4]}
          progressColor={dark ? theme.colors.teal[8] : theme.colors.teal[4]}
          cursorColor={dark ? theme.colors.teal[8] : theme.colors.teal[4]}
        />
      </WaveSurfer>
    </Box>
  );
});
