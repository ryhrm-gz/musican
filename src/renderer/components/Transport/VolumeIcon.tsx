import {
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerOffIcon,
  SpeakerQuietIcon,
} from "@radix-ui/react-icons";

type Props = {
  volume: number;
};

export const VolumeIcon = ({ volume }: Props) => {
  if (volume === 0) {
    return <SpeakerOffIcon />;
  }

  if (1 <= volume && volume <= 39) {
    return <SpeakerQuietIcon />;
  }

  if (40 <= volume && volume <= 69) {
    return <SpeakerModerateIcon />;
  }

  return <SpeakerLoudIcon />;
};
