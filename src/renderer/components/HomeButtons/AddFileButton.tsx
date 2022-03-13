import { Button } from "@mantine/core";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useRef } from "react";

export const AddFileButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addProcessing = useRef(false);

  const addFile = () => {
    if (addProcessing.current) return;
    addProcessing.current = true;

    inputRef?.current?.click();

    setTimeout(() => {
      addProcessing.current = false;
    }, 1000);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.type !== "audio/mpeg" && file.type !== "audio/wav") {
      alert("MP3 or WAVファイルを選択してください");
      event.target.value = "";
      return;
    }
    console.log(event.target.files);
    event.target.value = "";
  };

  return (
    <>
      <Button size="xs" leftIcon={<FilePlusIcon />} onClick={addFile}>
        ファイル追加
      </Button>
      <input
        hidden
        name="file"
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept=".mp3,.wav"
      />
    </>
  );
};
