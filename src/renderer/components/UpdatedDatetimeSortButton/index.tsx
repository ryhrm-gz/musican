import { Button } from "@mantine/core";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { updatedDatetimeSortState } from "../../state/updatedDatetimeSortState";

export const UpdatedDateTimeSortButton = () => {
  const [updatedSort, setUpdatedSort] = useAtom(updatedDatetimeSortState);
  const updatedSortIcon =
    updatedSort === "latest" ? <ArrowDownIcon /> : <ArrowUpIcon />;

  return (
    <Button
      compact
      pl={3}
      size="xs"
      color="gray"
      variant="subtle"
      rightIcon={updatedSortIcon}
      onClick={() =>
        setUpdatedSort(updatedSort === "latest" ? "oldest" : "latest")
      }
    >
      更新日時
    </Button>
  );
};
