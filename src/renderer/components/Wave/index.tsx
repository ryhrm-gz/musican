import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor";
import { WaveForm, WaveSurfer } from "wavesurfer-react";
import { PluginType } from "wavesurfer-react/dist/containers/WaveSurfer";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";

type Props = {
  id: number;
};

export const Wave = forwardRef<WaveSurfer, Props>((props, ref) => {
  const waveSurferRef = useRef<WaveSurfer>();
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

  const audios = useLiveQuery(
    async () => await db.audios.where("projectId").equals(props.id).toArray()
  );

  useEffect(() => {
    const path = audios?.[audios?.length - 1]?.path;

    if (waveSurferRef.current && path) {
      waveSurferRef.current.load(path);
    }
  }, [audios]);

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
  };

  if (!audios) {
    return null;
  }

  return (
    <Box>
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
