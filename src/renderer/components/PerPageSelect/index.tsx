import { Box, Select } from "@mantine/core";
import { useAtom } from "jotai";
import { perPageState } from "../../state/perPageState";

export const PerPageSelect = () => {
  const [perPage, setPerPage] = useAtom(perPageState);

  return (
    <Select
      size="xs"
      sx={{ width: 60, height: 29 }}
      value={String(perPage)}
      onChange={(value) => setPerPage(Number(value))}
      data={[
        { value: "10", label: "10" },
        { value: "20", label: "20" },
        { value: "30", label: "30" },
        { value: "40", label: "40" },
        { value: "50", label: "50" },
        { value: "100", label: "100" },
      ]}
    />
  );
};
