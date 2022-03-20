import { Box } from "@mantine/core";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor";
import { WaveForm, WaveSurfer } from "wavesurfer-react";
import { PluginType } from "wavesurfer-react/dist/containers/WaveSurfer";
import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
type Props = {
  id: number;
};

export const Wave = ({ id }: Props) => {
  const plugins: PluginType[] = [{ plugin: CursorPlugin, options: {} }];
  const waveSurferRef = useRef<WaveSurfer>();

  const audios = useLiveQuery(
    async () => await db.audios.where("projectId").equals(Number(id)).toArray()
  );

  useEffect(() => {
    const path = audios?.[audios?.length - 1]?.path;

    if (waveSurferRef.current && path) {
      waveSurferRef.current.load(path);
    }
  }, [audios]);

  const handleMount = (waveSurfer: WaveSurfer) => {
    waveSurferRef.current = waveSurfer;
  };

  if (!audios) {
    return null;
  }

  return (
    <Box>
      <WaveSurfer plugins={plugins} onMount={handleMount}>
        <WaveForm id="waveform" />
      </WaveSurfer>
    </Box>
  );
};
